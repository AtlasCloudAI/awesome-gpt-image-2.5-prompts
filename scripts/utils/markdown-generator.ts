import { type PromptRecord, type SortedPromptData } from "./cms-client.js";
import { SUPPORTED_LANGUAGES, t } from "./i18n.js";

const REPO = "awesome-gpt-image-2.5-prompts";
const REPO_URL = "https://github.com/AtlasCloudAI/awesome-gpt-image-2.5-prompts";
const UTM = `?utm_source=github&utm_campaign=${REPO}`;
const PROMPT_SUBMISSION_URL = `${REPO_URL}/issues/new?template=prompt.yml`;

function buildCategoryAnchor(index: number): string {
  return `category-${index + 1}`;
}

function buildLocalePrefix(locale: string): string {
  return locale === "en" ? "" : `/${locale}`;
}

function buildPromptLibraryUrl(locale: string): string {
  // 浏览入口指向 prompts-hub 上的 GPT Image 2.5 页面
  const q = locale === "zh" ? "&locale=zh-CN" : locale === "zh-TW" ? "&locale=zh-TW" : "";
  return `https://www.atlascloud.ai/prompts-hub/gpt-image-2-5-prompt${UTM}${q}`;
}

function buildAtlasHomepageUrl(): string {
  return `https://www.atlascloud.ai/${UTM}`;
}

function renderBadges(promptCount: number): string {
  return [
    "[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)",
    `[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)`,
    `[![GitHub stars](https://img.shields.io/github/stars/AtlasCloudAI/awesome-gpt-image-2.5-prompts?style=social)](${REPO_URL})`,
    `[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](${REPO_URL}/pulls)`,
    `[![Prompts](https://img.shields.io/badge/prompts-${promptCount}%2B-blue.svg)](${REPO_URL})`,
  ].join("\n");
}

interface HomeCopy {
  languages: string;
  contents: string;
  howToUse: string;
  browse: string;
  adapt: string;
  generate: string;
  execution: string;
  executionIntro: string;
  executionMcp: string;
  executionCliRest: string;
  polling: string;
  modelDefaults: string;
  modelDefaultText: string;
  modelIntro: string;
  modelDescription: string;
  promptGuide: string;
  launchStatus: string;
  capabilityIntro: string;
  availability: string;
  referenceBinding: string;
  observableAction: string;
  spatialRelations: string;
  cameraCuts: string;
  visualStyle: string;
  audio: string;
  constraints: string;
  curation: string;
  curationText: string;
  officialCommunity: string;
  previewMeaning: string;
  faq: string;
  resources: string;
  development: string;
}

const homeCopyEn: HomeCopy = {
  languages: "Languages",
  contents: "Contents",
  howToUse: "How to use this repository",
  browse: "**Browse:** filter by category, open a real preview when available, and copy the prompt.",
  adapt: "**Adapt:** swap in your own subject, scene and on-screen text. Keep the sentences that name what must NOT change — on an editing model those are load-bearing, not padding.",
  generate:
    "**Generate:** run it on the newest GPT Image generation your provider exposes (Atlas Cloud currently serves GPT Image 2), then edit one element at a time instead of re-prompting from scratch.",
  execution: "Generation modes in the official handbook",
  executionIntro:
    "Every entry pairs a genuine Images 2.5 output with the prompt recovered from it, so you can see what 2.5 actually produces before you spend a generation of your own.",
  executionMcp: "**Atlas MCP:** used when the user explicitly selects MCP and its generation tools are available.",
  executionCliRest: "**Atlas CLI / REST:** used for explicit terminal, script, CI, or batch workflows.",
  polling:
    "All asynchronous jobs are polled every 2 seconds using the same prediction ID. A timeout or delayed output is not permission to submit a duplicate paid generation.",
  modelDefaults: "Model defaults",
  modelDefaultText:
    "**Previews:** OpenAI's own Images 2.5 example outputs, taken from the announcement and re-hosted on the Atlas CDN, credited to OpenAI. **Prompts:** OpenAI published the examples but not the prompts behind them, so each prompt here was recovered from the image by a vision model. Treat them as faithful reconstructions, not official wording.",
  modelIntro: "What is GPT Image 2.5?",
  modelDescription:
    "GPT Image 2.5 (announced as ChatGPT Images 2.5 on September 8, 2026) is OpenAI's image model for generation and editing. The announcement leads with four claims: sharper details with more natural lighting and richer textures, better preservation of the subjects in your reference photos, editing instructions followed more reliably across multiple turns, and image generation latency reduced by up to 50% compared with Images 2.0.",
  promptGuide: "GPT Image 2.5 prompt guide",
  launchStatus:
    "**Availability:** Images 2.5 rolled out on September 8, 2026 to all ChatGPT, ChatGPT Work and Codex tiers on desktop, mobile and web, and both API models are now live on Atlas Cloud: [Flare text-to-image](https://www.atlascloud.ai/models/openai/gpt-image-2.5-flare/text-to-image) and [Flare edit](https://www.atlascloud.ai/models/openai/gpt-image-2.5-flare/edit) — the default choice, with the quality and editing gains at 50% lower latency than GPT Image 2 — plus [Sunburst text-to-image](https://www.atlascloud.ai/models/openai/gpt-image-2.5-sunburst/text-to-image) and [Sunburst edit](https://www.atlascloud.ai/models/openai/gpt-image-2.5-sunburst/edit) for premium workflows that want tighter control across edits, at longer generation times.",
  capabilityIntro:
    "**From the official announcement:** reference fidelity, so subjects from your own photos stay recognisable across new settings, styles and compositions; precision editing, changing one element while the rest of the frame holds; multi-turn consistency, where earlier edits survive later ones without quality decay; better handling of complex visual instructions, real-world information, complex layouts and transparent backgrounds; and stronger adherence to a named visual style. In ChatGPT it also ships Sketch (draw a reference with `@Sketch`), Templates for formats like Poster and Merch, comments placed directly on an image for focused edits, and prompt sharing. Outputs carry C2PA metadata and invisible watermarking. The API adds `xhigh` and `max` quality levels and arbitrary output resolutions within documented constraints.",
  availability:
    "**Availability note:** resolutions, quality levels and editing controls differ per provider and per GPT Image generation — check the model page before a billable run.",
  referenceBinding: "**Reference binding:** state what each reference image controls, and which of its features must carry through.",
  observableAction: "**Observable action:** describe visible events in temporal order, including reactions and state changes.",
  spatialRelations: "**Spatial relationships:** say where subjects, objects, and the camera are in relation to each other.",
  cameraCuts: "**Camera and cuts:** specify framing, movement, cut order, match actions, and occlusions only where they matter.",
  visualStyle: "**Visual style:** define lighting, palette, texture, atmosphere, and pace.",
  audio: "**Audio:** define dialogue, ambience, sound effects, or music when the selected model supports them.",
  constraints: "**Constraints:** preserve only the identities, product details, scene traits, and exclusions that are essential.",
  curation: "Curation and provenance",
  curationText:
    "Every record keeps its category, source, author, source link, input references and preview image, and prompt text is never rewritten during README generation. Most records come from X: the prompt is the author's own wording as they posted it, the preview is the image they posted with it, and both the author and the original post stay credited. Each one was kept only after an automated check that the post attributes the image to GPT Image 2.5 and that the image matches what the prompt asks for. The records labelled `official` are OpenAI's own Images 2.5 examples: their previews are credited to OpenAI and linked back to the announcement, and for those the prompt text is a reconstruction recovered from the image rather than official wording. If a rights holder would rather an image were not reproduced here, open an issue and it will be removed.",
  officialCommunity:
    "The `official` and `community` labels describe where a prompt came from; they are not a guarantee that every prompt has been independently benchmarked across every provider or model version.",
  previewMeaning:
    "A preview demonstrates one observed output under its original setup. Results can change with model version, provider parameters, references, aspect ratio, seed, and moderation.",
  faq: "Frequently asked questions",
  resources: "Resources",
  development: "Repository development",
};

const homeCopyZh: HomeCopy = {
  ...homeCopyEn,
  languages: "语言",
  contents: "目录",
  howToUse: "如何使用这个仓库",
  browse: "**浏览：** 按分类查找提示词；有真实预览时先看预览，再复制提示词。",
  adapt: "**改写：** 换掉主体、场景和画面文字；那些写明「什么不许变」的句子请保留——对编辑型模型来说它们是承重结构，不是废话。",
  generate:
    "**生成：** 用你的服务商所提供的最新一代 GPT Image 跑（Atlas Cloud 目前提供 GPT Image 2），要改就一次只改一个元素，别整条重写。",
  execution: "官方手册里的生成模式",
  executionMcp: "**Atlas MCP：** 只有用户明确选择 MCP，且当前客户端暴露生成工具时才使用。",
  executionCliRest: "**Atlas CLI / REST：** 用于用户明确选择的终端、脚本、CI 或批量任务。",
  polling:
    "所有异步任务都使用同一个 prediction ID 每 2 秒轮询一次。超时或暂时没有输出，不代表可以重复提交付费生成任务。",
  modelDefaults: "默认模型",
  modelDefaultText:
    "**预览：** OpenAI 官方公告里的 Images 2.5 示例输出，署名 OpenAI、转存 Atlas CDN。**提示词：** 官方公布了示例但没公布提示词，所以每条都是用视觉模型看图反推的——请当作忠实还原，不是官方原文。",
  modelIntro: "GPT Image 2.5 是什么？",
  modelDescription:
    "GPT Image 2.5(官方名 ChatGPT Images 2.5,2026-09-08 发布)是 OpenAI 的图像生成与编辑模型。官方公告主打四点:细节更锐、光影与质感更自然;更好地保留参考照片里的主体;多轮编辑时更可靠地照做指令;生成延迟相比 Images 2.0 降低最多 50%。",
  promptGuide: "GPT Image 2.5 提示词指南",
  launchStatus:
    "**可用性：** Images 2.5 于 2026-09-08 面向全部 ChatGPT / ChatGPT Work / Codex 用户在桌面、移动和网页端推出,API 侧两个模型现在都已上线 Atlas Cloud:[Flare 文生图](https://www.atlascloud.ai/models/openai/gpt-image-2.5-flare/text-to-image) 与 [Flare 图像编辑](https://www.atlascloud.ai/models/openai/gpt-image-2.5-flare/edit)——默认选择,画质与编辑能力同步提升、延迟比 GPT Image 2 低 50%;以及 [Sunburst 文生图](https://www.atlascloud.ai/models/openai/gpt-image-2.5-sunburst/text-to-image) 与 [Sunburst 图像编辑](https://www.atlascloud.ai/models/openai/gpt-image-2.5-sunburst/edit)——面向需要跨多次编辑保持精细控制的高端工作流,生成更慢。",
  capabilityIntro:
    "**取自官方公告:** 参考图保真——你自己照片里的主体换场景、换风格、换构图后依然认得出;精准编辑——只改一个元素,画面其余部分保持不动;多轮一致性——先前的修改在后续编辑中不被破坏、画质不随轮次衰减;对复杂视觉指令、真实世界信息、复杂版式与透明背景的处理更好;对指定风格的贴合度更高。ChatGPT 侧同时上了 Sketch(用 `@Sketch` 手绘参考)、Templates(海报/周边等版式模板)、直接在图上打评论做定点编辑、以及分享提示词。输出带 C2PA 元数据与隐形水印。API 侧新增 `xhigh`、`max` 画质档与任意分辨率(在文档约束内)。",
  referenceBinding: "**参考绑定：** 明确每张参考图控制什么,以及它的哪些特征必须延续下来。",
  observableAction: "**可观察动作：** 按时间顺序写清画面中真正发生的事件、反应和状态变化。",
  spatialRelations: "**空间关系：** 写清主体、物体与镜头之间的位置和相对关系。",
  cameraCuts: "**镜头与剪辑：** 只在必要时指定景别、运镜、切镜顺序、动作匹配和遮挡转场。",
  visualStyle: "**视觉风格：** 定义光线、色彩、材质、氛围和节奏。",
  audio: "**音频：** 当所选模型支持时，定义对白、环境声、音效或音乐。",
  constraints: "**约束：** 只保留真正重要的人物身份、产品细节、场景特征和禁止项。",
  curation: "收录标准与来源说明",
  curationText:
    "每条提示词都会保留分类、来源平台、作者、原始链接、输入参考素材与预览图，README 生成过程不会改写提示词正文。绝大多数记录来自 X：提示词是作者本人发布时的原文，预览图是他随帖发布的成品图，作者与原帖链接都保留。每条都经过自动核验才收录——原帖需把该图归属给 GPT Image 2.5，且图要和提示词描述得对得上。标为 `official` 的是 OpenAI 官方 Images 2.5 示例：预览图署名 OpenAI 并链回公告，这部分的提示词是从示例图反推重建的，不是官方原文。若权利人不希望某张图出现在这里，开 issue 即可移除。",
  officialCommunity:
    "`official` 和 `community` 标签表示提示词的来源性质，并不代表每条提示词都已经在所有服务商和模型版本上完成独立测试。",
  previewMeaning:
    "预览图代表原始配置下的一次真实输出。模型版本、服务商参数、参考素材、画幅、seed 和内容审核变化，都可能导致不同结果。",
  faq: "常见问题",
  resources: "相关资源",
  development: "仓库开发",
};

const homeCopyZhTw: HomeCopy = {
  ...homeCopyZh,
  languages: "語言",
  contents: "目錄",
  howToUse: "如何使用這個倉庫",
  browse: "**瀏覽：** 按分類尋找提示詞；有真實預覽時先看預覽，再複製提示詞。",
  adapt: "**改寫：** 換掉主體、場景和畫面文字；那些寫明「什麼不許變」的句子請保留——對編輯型模型來說它們是承重結構，不是廢話。",
  generate:
    "**生成：** 用你的服務商所提供的最新一代 GPT Image 跑（Atlas Cloud 目前提供 GPT Image 2），要改就一次只改一個元素，別整條重寫。",
  execution: "官方手冊裡的生成模式",
  executionMcp: "**Atlas MCP：** 只有使用者明確選擇 MCP，且目前客戶端提供生成工具時才使用。",
  executionCliRest: "**Atlas CLI / REST：** 用於使用者明確選擇的終端機、腳本、CI 或批次任務。",
  polling:
    "所有非同步任務都使用同一個 prediction ID 每 2 秒輪詢一次。逾時或暫時沒有輸出，不代表可以重複提交付費生成任務。",
  modelDefaults: "預設模型",
  modelDefaultText:
    "**預覽：** OpenAI 官方公告裡的 Images 2.5 範例輸出，署名 OpenAI、轉存 Atlas CDN。**提示詞：** 官方公布了範例但沒公布提示詞，所以每條都是用視覺模型看圖反推的——請當作忠實還原，不是官方原文。",
  modelIntro: "GPT Image 2.5 是什麼？",
  modelDescription:
    "GPT Image 2.5(官方名 ChatGPT Images 2.5,2026-09-08 發布)是 OpenAI 的圖像生成與編輯模型。官方公告主打四點:細節更銳、光影與質感更自然;更好地保留參考照片裡的主體;多輪編輯時更可靠地照做指令;生成延遲相比 Images 2.0 降低最多 50%。",
  promptGuide: "GPT Image 2.5 提示詞指南",
  launchStatus:
    "**可用性：** Images 2.5 於 2026-09-08 面向全部 ChatGPT / ChatGPT Work / Codex 使用者在桌面、行動與網頁端推出,API 側兩個模型現在都已上線 Atlas Cloud:[Flare 文生圖](https://www.atlascloud.ai/models/openai/gpt-image-2.5-flare/text-to-image) 與 [Flare 圖像編輯](https://www.atlascloud.ai/models/openai/gpt-image-2.5-flare/edit)——預設選擇,畫質與編輯能力同步提升、延遲比 GPT Image 2 低 50%;以及 [Sunburst 文生圖](https://www.atlascloud.ai/models/openai/gpt-image-2.5-sunburst/text-to-image) 與 [Sunburst 圖像編輯](https://www.atlascloud.ai/models/openai/gpt-image-2.5-sunburst/edit)——面向需要跨多次編輯維持精細控制的高階工作流,生成更慢。",
  capabilityIntro:
    "**取自官方公告:** 參考圖保真——你自己照片裡的主體換場景、換風格、換構圖後依然認得出;精準編輯——只改一個元素,畫面其餘部分保持不動;多輪一致性——先前的修改在後續編輯中不被破壞、畫質不隨輪次衰減;對複雜視覺指令、真實世界資訊、複雜版式與透明背景的處理更好;對指定風格的貼合度更高。ChatGPT 側同時上了 Sketch(用 `@Sketch` 手繪參考)、Templates(海報/周邊等版式模板)、直接在圖上留言做定點編輯、以及分享提示詞。輸出帶 C2PA 中介資料與隱形水印。API 側新增 `xhigh`、`max` 畫質檔與任意解析度(在文件約束內)。",
  referenceBinding: "**參考綁定：** 明確每張參考圖控制什麼,以及它的哪些特徵必須延續下來。",
  observableAction: "**可觀察動作：** 按時間順序寫清畫面中真正發生的事件、反應和狀態變化。",
  spatialRelations: "**空間關係：** 寫清主體、物體與鏡頭之間的位置和相對關係。",
  cameraCuts: "**鏡頭與剪輯：** 只在必要時指定景別、運鏡、切鏡順序、動作匹配和遮擋轉場。",
  visualStyle: "**視覺風格：** 定義光線、色彩、材質、氛圍和節奏。",
  audio: "**音訊：** 當所選模型支援時，定義對白、環境聲、音效或音樂。",
  constraints: "**約束：** 只保留真正重要的人物身分、產品細節、場景特徵和禁止項。",
  curation: "收錄標準與來源說明",
  curationText:
    "每條提示詞都會保留分類、來源平台、作者、原始連結、輸入參考素材與預覽圖，README 生成過程不會改寫提示詞正文。絕大多數記錄來自 X：提示詞是作者本人發佈時的原文，預覽圖是他隨帖發佈的成品圖，作者與原帖連結都保留。每條都經過自動核驗才收錄——原帖需把該圖歸屬給 GPT Image 2.5，且圖要和提示詞描述得對得上。標為 `official` 的是 OpenAI 官方 Images 2.5 範例：預覽圖署名 OpenAI 並連回公告，這部分的提示詞是從範例圖反推重建的，不是官方原文。若權利人不希望某張圖出現在這裡，開 issue 即可移除。",
  officialCommunity:
    "`official` 和 `community` 標籤表示提示詞的來源性質，並不代表每條提示詞都已經在所有服務商和模型版本上完成獨立測試。",
  previewMeaning:
    "預覽圖代表原始設定下的一次真實輸出。模型版本、服務商參數、參考素材、畫幅、seed 和內容審核變化，都可能導致不同結果。",
  faq: "常見問題",
  resources: "相關資源",
  development: "倉庫開發",
};

function getHomeCopy(locale: string): HomeCopy {
  if (locale === "zh") return homeCopyZh;
  if (locale === "zh-TW") return homeCopyZhTw;
  return homeCopyEn;
}

function renderHeading(id: string, heading: string): string {
  return [`<a id="${id}"></a>`, "", `## ${heading}`, ""].join("\n");
}

function renderLanguageNavigation(currentLocale: string): string {
  const badges = SUPPORTED_LANGUAGES.map((lang) => {
    const isCurrent = lang.code === currentLocale;
    const color = isCurrent ? "brightgreen" : "lightgrey";
    const text = isCurrent ? t("current", currentLocale) : t("view", currentLocale);
    return `[![${lang.name}](https://img.shields.io/badge/${encodeURIComponent(lang.name)}-${encodeURIComponent(text)}-${color})](${REPO_URL}/blob/main/${lang.readmeFileName})`;
  }).join(" ");

  return `${badges}\n\n---\n`;
}

function renderQuickLinks(locale: string): string {
  const apiKeyUrl = `https://www.atlascloud.ai/console/api-keys${UTM}`;
  const labels =
    locale === "zh"
      ? ["浏览提示词", "提交提示词", "在 Atlas Cloud 生成", "获取 API Key"]
      : locale === "zh-TW"
        ? ["瀏覽提示詞", "提交提示詞", "在 Atlas Cloud 生成", "取得 API Key"]
        : ["Browse prompts", "Submit your prompt", "Generate with Atlas Cloud", "Get an API key"];

  return [
    `| [${labels[0]}](${buildPromptLibraryUrl(locale)}) | [${labels[1]}](${PROMPT_SUBMISSION_URL}) | [${labels[2]}](${buildAtlasHomepageUrl()}) | [${labels[3]}](${apiKeyUrl}) |`,
    "|---|---|---|---|",
    "",
    renderLanguageNavigation(locale),
  ].join("\n");
}


function renderHowToUse(locale: string): string {
  const copy = getHomeCopy(locale);
  return [
    renderHeading("how-to-use", `🚀 ${copy.howToUse}`),
    `1. ${copy.browse}`,
    `2. ${copy.adapt}`,
    `3. ${copy.generate}`,
    "",
  ].join("\n");
}

function renderExecution(locale: string): string {
  const copy = getHomeCopy(locale);
  const zh = locale === "zh" || locale === "zh-TW";
  const rows = zh
    ? [
        ["参考图保真", "Image fidelity as you create", "写清参考图里哪些特征必须认得出:脸型、痣、发际线、品牌处理"],
        ["精准编辑", "Precision editing", "点名「只改哪一个元素」,再逐项列出必须保持不动的东西"],
        ["多轮一致性", "Multi-turn editing consistency", "每一轮都把不变量重述一遍,别指望模型自己记住"],
        ["复杂版式与文字", "Intelligence and style improvements", "把每一段文案原样写出并交代层级,别只说「加点文字」"],
        ["透明背景", "Intelligence and style improvements", "明确要 alpha,并写「不要投影、不要白边、不要背景填充」"],
        ["风格把控", "Intelligence and style improvements", "点名媒介及其工艺瑕疵(套印偏移、纸纹、半调网点)"],
        ["草图转成图", "Use Sketch to draw your idea to life", "声明手绘只作版式参考,再描述成品的材质与光线"],
        ["版式模板", "Structure your prompts for better results", "先选定格式(海报/周边),再把每一个信息位填满"],
      ]
    : [
        ["Reference fidelity", "Image fidelity as you create", "Name the features that must stay recognisable: face shape, a mole, the hairline, brand treatment"],
        ["Precision editing", "Precision editing", "Name the ONE element to change, then list what must stay untouched"],
        ["Multi-turn consistency", "Multi-turn editing consistency", "Restate the invariants on every turn; do not assume the model remembers"],
        ["Complex layout & typography", "Intelligence and style improvements", "Write every string verbatim and state its hierarchy — never just \"add some text\""],
        ["Transparent background", "Intelligence and style improvements", "Ask for alpha explicitly and forbid shadows, halos and background fills"],
        ["Style direction", "Intelligence and style improvements", "Name the medium and its artefacts (misregistration, paper tooth, halftone)"],
        ["Sketch to image", "Use Sketch to draw your idea to life", "Say the drawing is layout guidance only, then describe the finished materials and light"],
        ["Template formats", "Structure your prompts for better results", "Pick the format (Poster, Merch), then fill every information slot"],
      ];
  return [
    renderHeading("model-and-execution-defaults", `⚙️ ${zh ? "官方能力面 → 提示词怎么写" : "Official capability areas, and how to prompt for them"}`),
    zh
      ? "官方公告把 2.5 的改进分成几个能力面。写提示词时先想清楚自己要的是哪一面——尤其「改一个元素」和「重画一张」完全是两种写法。"
      : "The announcement groups 2.5's gains into a handful of capability areas. Decide which one you are asking for before you write — \"change one element\" and \"draw me a new one\" are entirely different prompts.",
    "",
    `| ${zh ? "能力面" : "Capability"} | ${zh ? "官方章节" : "Announcement section"} | ${zh ? "提示词要点" : "What to write"} |`,
    "|---|---|---|",
    ...rows.map((r) => `| ${r[0]} | ${r[1]} | ${r[2]} |`),
    "",
    zh
      ? "**Atlas Cloud 现状:** `gpt-image-2.5-flare` 与 `sunburst` 的文生图/图像编辑四条路由都已上线,生成按钮默认落在 Flare 文生图(官方口径的默认选择);实测 1024×1024 单价 $0.01817,比 GPT Image 2 的 $0.05768 便宜约三倍。"
      : "**On Atlas Cloud today:** all four routes are live — text-to-image and edit for both `gpt-image-2.5-flare` and `gpt-image-2.5-sunburst`. The Generate button lands on Flare text-to-image, the default choice in OpenAI's own framing. Measured price at 1024x1024 is $0.01817, about three times cheaper than GPT Image 2 at $0.05768.",
    "",
    `**[→ ${zh ? "获取 Atlas Cloud API Key" : "Get an Atlas Cloud API key"}](https://www.atlascloud.ai/console/api-keys${UTM})**`,
    "",
  ].join("\n");
}

function renderMoreTools(locale: string): string {
  const copy = getHomeCopy(locale);
  const websiteLabel =
    locale === "zh" ? "Atlas Cloud 官网" : locale === "zh-TW" ? "Atlas Cloud 官方網站" : "Atlas Cloud official website";
  return [
    renderHeading("resources", `🔗 ${copy.resources}`),
    "",
    `- [${websiteLabel}](${buildAtlasHomepageUrl()})`,
    `- [Atlas Cloud GPT Image 2.5 Flare text-to-image](https://www.atlascloud.ai${buildLocalePrefix(locale)}/models/openai/gpt-image-2.5-flare/text-to-image${UTM})`,
    `- [Atlas Cloud GPT Image 2.5 Flare edit](https://www.atlascloud.ai${buildLocalePrefix(locale)}/models/openai/gpt-image-2.5-flare/edit${UTM})`,
    `- [Atlas Cloud GPT Image 2.5 Sunburst text-to-image](https://www.atlascloud.ai${buildLocalePrefix(locale)}/models/openai/gpt-image-2.5-sunburst/text-to-image${UTM})`,
    "- [OpenAI: Introducing ChatGPT Images 2.5](https://openai.com/index/introducing-chatgpt-images-2-5/)",
    "- [Atlas MCP Server](https://github.com/AtlasCloudAI/mcp-server)",
    "- [Atlas CLI](https://github.com/AtlasCloudAI/cli)",
    `- [Atlas Cloud model catalog](https://www.atlascloud.ai/models${UTM})`,
    "- [Discord](https://discord.gg/MWmMr4q9es)",
    "",
  ].join("\n");
}

function renderContents(locale: string): string {
  const copy = getHomeCopy(locale);
  return [
    renderHeading("contents", `📖 ${copy.contents}`),
    `- [🤔 ${copy.modelIntro}](#model-overview)`,
    `- [🧩 ${copy.promptGuide}](#prompt-guide)`,
    `- [🚀 ${copy.howToUse}](#how-to-use)`,
    `- [⚙️ ${copy.execution}](#model-and-execution-defaults)`,
    `- [🔎 ${copy.curation}](#curation-and-provenance)`,
    `- [📊 ${t("stats", locale)}](#statistics)`,
    `- [🏷️ ${t("browseByCategory", locale)}](#browse-by-category)`,
    `- [📋 ${t("allPrompts", locale)}](#all-prompts)`,
    `- [🔥 ${t("featuredPrompts", locale)}](#featured-prompts)`,
    `- [❓ ${copy.faq}](#faq)`,
    `- [🔗 ${copy.resources}](#resources)`,
    `- [📄 ${t("license", locale)}](#license)`,
    "",
  ].join("\n");
}

function renderPrompt(prompt: PromptRecord, index: number, locale: string): string {
  const lines = [
    `### No. ${index + 1}: ${prompt.title}`,
    "",
    `- **${t("category", locale)}:** \`${prompt.category}\``,
    `- **${t("source", locale)}:** \`${prompt.source_platform}\``,
    `- **${t("author", locale)}:** ${prompt.author_name}`,
    `- **${t("language", locale)}:** \`${prompt.language}\``,
  ];

  // 图像模型:结果图放 image_url,X 采集侧(fmt_gpt_image2)放 remote_images —— 两种都要能渲染
  const resultImages: string[] = prompt.image_url
    ? [prompt.image_url]
    : (prompt.remote_images ?? []);
  const zhLoc = locale === "zh" || locale === "zh-TW";
  if (resultImages.length > 0) {
    const label = zhLoc ? (locale === "zh-TW" ? "成品圖" : "成品图") : "Result";
    lines.push(`- **${label}:** [${t("view", locale)}](${resultImages[0]})`);
    lines.push("");
    lines.push("<p>");
    for (const image of resultImages.slice(0, 4)) {
      lines.push(`  <img src="${image}" width="480" referrerpolicy="no-referrer">`);
    }
    lines.push("</p>");
  }

  // 编辑类条目:reference_images 是"编辑前"的输入图,必须与成品图区分开标注
  const referenceImages = prompt.reference_images ?? [];
  if (referenceImages.length > 0) {
    const label = zhLoc ? (locale === "zh-TW" ? "輸入圖（編輯前）" : "输入图（编辑前）") : "Input (before the edit)";
    lines.push("");
    lines.push(`- **${label}:**`);
    lines.push("");
    lines.push("<p>");
    for (const image of referenceImages) {
      lines.push(`  <img src="${image}" width="320" referrerpolicy="no-referrer">`);
    }
    lines.push("</p>");
  }

  lines.push(
    "",
    `#### ${t("description", locale)}`,
    "",
    prompt.description,
    "",
    `#### ${t("prompt", locale)}`,
    "",
    "```text",
    prompt.prompt,
    "```",
    ""
  );

  // 编辑类条目要能复现:先给出生成「编辑前」那张图的底图提示词
  if (prompt.base_prompt) {
    const label = zhLoc
      ? locale === "zh-TW" ? "底圖提示詞（用來生成編輯前那張圖）" : "底图提示词（用来生成编辑前那张图）"
      : "Input prompt (generates the before image)";
    lines.push(`#### ${label}`, "", "```text", prompt.base_prompt, "```", "");
  }

  return lines.join("\n");
}

function renderModelOverview(locale: string): string {
  const copy = getHomeCopy(locale);
  return [
    renderHeading("model-overview", `🤔 ${copy.modelIntro}`),
    copy.modelDescription,
    "",
    copy.launchStatus,
    "",
    copy.capabilityIntro,
    "",
    copy.availability,
    "",
  ].join("\n");
}

function renderPromptGuide(locale: string): string {
  const copy = getHomeCopy(locale);
  return [
    renderHeading("prompt-guide", `🧩 ${copy.promptGuide}`),
    "",
    "1. " + copy.referenceBinding,
    "2. " + copy.observableAction,
    "3. " + copy.spatialRelations,
    "4. " + copy.cameraCuts,
    "5. " + copy.visualStyle,
    "6. " + copy.audio,
    "7. " + copy.constraints,
    "",
  ].join("\n");
}

function renderCuration(locale: string): string {
  const copy = getHomeCopy(locale);
  return [
    renderHeading("curation-and-provenance", `🔎 ${copy.curation}`),
    copy.curationText,
    "",
    "- " + copy.officialCommunity,
    "- " + copy.previewMeaning,
    "",
  ].join("\n");
}

function renderFaq(locale: string): string {
  const copy = getHomeCopy(locale);
  const zh = locale === "zh" || locale === "zh-TW";
  const items = zh
    ? [
        ["预览图是 2.5 生成的吗?", "是。每张预览都是 OpenAI 在官方公告里发布的 Images 2.5 输出,署名 OpenAI 并链回公告出处。"],
        ["那提示词从哪来?", "官方公布了示例但没公布提示词。本仓每条提示词都是用视觉模型看图反推出来的,属于忠实还原而非官方原文——它能复现创意和构图,不保证像素一致。"],
        ["这些提示词能直接用吗?", "可以,复制即用。它们是写给模型的指令,所以你的服务商提供哪一代 GPT Image 都能跑。"],
        ["编辑类条目怎么用?", "这类条目有两张图:OpenAI 展示的输入图和编辑后的结果。先用记录里的底图提示词生成输入图(或换成你自己的图),再把编辑指令发给 edit 端点。那些「不要改什么」的长句子正是重点:精准编辑与多轮一致性是 2.5 的主打改进,而这两件事靠的就是显式列出不变量。"],
      ]
    : [
        ["Were the previews made with 2.5?", "Yes. Every preview is an Images 2.5 output published by OpenAI in the announcement, credited to OpenAI and linked back to it."],
        ["Then where do the prompts come from?", "OpenAI published the examples but not the prompts behind them. Each prompt here was recovered from the image by a vision model, so it is a faithful reconstruction rather than official wording — expect it to reproduce the idea and the composition, not the exact pixels."],
        ["Can I use these prompts as-is?", "Yes, copy and run. They are written as instructions, so they transfer to whichever GPT Image generation your provider exposes."],
        ["How do the editing entries work?", "Those carry two images: the input OpenAI showed and the edited result. Generate the input with the base prompt in the record — or drop in your own photo — then send the edit instruction to the edit endpoint. The long preserve-list in those prompts is the point: precision editing and multi-turn consistency are the headline 2.5 improvements, and both depend on stating the invariants explicitly."],
      ];
  const lines = [renderHeading("faq", `❓ ${copy.faq}`)];
  for (const [question, answer] of items) {
    lines.push(`### ${question}`, "", answer, "");
  }
  return lines.join("\n");
}

export function generateMarkdown(data: SortedPromptData, locale: string): string {
  const now = new Date().toISOString().slice(0, 10);
  const copy = getHomeCopy(locale);
  const lines: string[] = [];
  const promptsByCategory = new Map<string, PromptRecord[]>();

  for (const prompt of data.all) {
    const categoryPrompts = promptsByCategory.get(prompt.category) || [];
    categoryPrompts.push(prompt);
    promptsByCategory.set(prompt.category, categoryPrompts);
  }

  lines.push(`# 🎬 ${t("title", locale)}`);
  lines.push("");
  lines.push(`> ${t("subtitle", locale)}`);
  lines.push("");
  lines.push(renderBadges(data.stats.total));
  lines.push("");
  lines.push(renderQuickLinks(locale));
  lines.push(renderContents(locale));
  lines.push(renderModelOverview(locale));
  lines.push(renderPromptGuide(locale));
  lines.push(renderHowToUse(locale));
  lines.push(renderExecution(locale));
  lines.push(renderCuration(locale));
  lines.push(renderHeading("statistics", `📊 ${t("stats", locale)}`));
  lines.push("");
  lines.push(`| ${t("metric", locale)} | ${t("count", locale)} |`);
  lines.push("|--------|-------|");
  lines.push(`| ${t("totalPrompts", locale)} | **${data.stats.total}** |`);
  lines.push(`| ${t("categories", locale)} | **${data.categoryCounts.length}** |`);
  lines.push(`| ${t("previewVideos", locale)} | **${data.stats.videos}** |`);
  lines.push(`| ${t("lastUpdated", locale)} | **${now}** |`);
  lines.push("");
  lines.push(renderHeading("browse-by-category", `🏷️ ${t("browseByCategory", locale)}`));
  lines.push("");

  data.categoryCounts.forEach((item, index) => {
    const anchor = buildCategoryAnchor(index);
    lines.push(`- [\`${item.category}\`](#${anchor}): **${item.count}**`);
  });

  lines.push("");
  lines.push(renderHeading("all-prompts", `📋 ${t("allPrompts", locale)}`));
  lines.push("");

  data.categoryCounts.forEach((item, index) => {
    const anchor = buildCategoryAnchor(index);
    const prompts = promptsByCategory.get(item.category) || [];
    lines.push(`<a id="${anchor}"></a>`);
    lines.push("");
    lines.push(`### ${item.category} (${prompts.length})`);
    lines.push("");
    prompts.forEach((prompt, promptIndex) => lines.push(renderPrompt(prompt, promptIndex, locale)));
  });

  lines.push(renderHeading("featured-prompts", `🔥 ${t("featuredPrompts", locale)}`));
  data.featured.forEach((prompt, index) => lines.push(renderPrompt(prompt, index, locale)));
  lines.push(renderFaq(locale));
  lines.push(`<details><summary>${copy.development}</summary>`);
  lines.push("");
  lines.push("```bash");
  lines.push("npm ci");
  lines.push("npm run generate");
  lines.push("npx tsc --noEmit");
  lines.push("```");
  lines.push("");
  lines.push("</details>");
  lines.push("");
  lines.push(renderMoreTools(locale));
  lines.push(renderHeading("license", `📄 ${t("license", locale)}`));
  lines.push("");
  lines.push("[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)");
  lines.push("");
  lines.push(`> ${t("copyright", locale)}`);
  lines.push("");
  lines.push(`> ${t("autoGenerated", locale)} ${now}.`);
  lines.push("");

  return lines.join("\n");
}
