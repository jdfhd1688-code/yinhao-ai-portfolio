export type Locale = "zh" | "en";
export type LocalizedText = { zh: string; en: string };
export type ProjectStatusValue = "IN_PROGRESS" | "RELEASED" | "LIVE" | "COMING_SOON";

export type PlannedAsset = {
  path: string;
  title: string;
  subtitle: string;
  mediaType: "Product Screen" | "Workflow" | "Architecture" | "Film" | "Visual Frame";
  aspectRatio: "16/9" | "4/3" | "3/4" | "9/16";
  status: ProjectStatusValue;
};

export type Project = {
  id: string; number: string; order: number; year: string; group: "featured" | "released"; status: ProjectStatusValue;
  title: LocalizedText; subtitle: LocalizedText; category: LocalizedText; hero: string; statement: LocalizedText;
  description: LocalizedText; problem: LocalizedText; insight: LocalizedText; solution: LocalizedText;
  process: { zh: string[]; en: string[] }; workflow: { zh: string[]; en: string[] }; directions: { zh: string[]; en: string[] };
  reflection: LocalizedText; nextStep: LocalizedText; plannedAssets: PlannedAsset[]; availableAssets: string[];
  ctaLabel: LocalizedText; ctaHref: string;
  statusLabel?: LocalizedText;
  cardTag?: LocalizedText;
  role?: { zh: string[]; en: string[] };
  features?: { zh: string[]; en: string[] };
  evidenceScreens?: { src: string; title: LocalizedText; caption: LocalizedText }[];
  externalLinks?: { label: LocalizedText; href: string }[];
};

export const projects: Project[] = [
  {
    id: "youwozai", number: "02", order: 2, year: "2026", group: "featured", status: "IN_PROGRESS",
    title: { zh: "有我在", en: "YOUWOZAI" }, subtitle: { zh: "YOUWOZAI · AI 陪伴产品", en: "AI Companion" },
    category: { zh: "AI 产品 / 人的连接", en: "AI Product / Human Connection" }, hero: "/media/youwozai/cover-generated.png",
    statement: { zh: "如果 AI 记住的不只是你说过什么，也包括你当时的感受。", en: "What if AI could remember how you felt, not just what you said?" },
    description: { zh: "一个关于记忆、理解与长期陪伴的 AI 产品探索。它不只及时回复，也尝试延续人与人之间才有的关心。", en: "An exploration of memory, understanding and long-term AI companionship — designed to carry care beyond a single reply." },
    problem: { zh: "多数 AI 对话产品擅长回答，却很难记住情绪的来处，也难以建立一段连续的关系。", en: "Most AI conversations answer well, but struggle to remember emotional context or sustain a continuous relationship." },
    insight: { zh: "陪伴不是更快的回复。它包含记忆、理解、延续，以及在合适的时候主动关心。", en: "Companionship is not a faster reply. It is memory, understanding, continuity, and knowing when to reach out." },
    solution: { zh: "当前 MVP 已连接聊天、情绪记录、每周来信、趋势视图、守护圈、长期记忆与高风险安全流程。", en: "The current MVP connects conversation, emotion records, weekly letters, trend views, a guardian circle, long-term memory and a high-risk safety workflow." },
    process: { zh: ["理解情境", "识别情绪需求", "记忆模型", "安全设计", "原型验证"], en: ["Context", "Emotional needs", "Memory model", "Safety design", "Prototype"] },
    workflow: { zh: ["用户消息", "意图与情绪", "记忆检索", "风险识别", "上下文组织", "生成回应", "情绪记录", "长期记忆"], en: ["User message", "Intent / emotion", "Memory retrieval", "Risk detection", "Context assembly", "LLM response", "Emotional record", "Long-term memory"] },
    directions: { zh: ["和小在聊聊", "情绪记录", "每周来信", "守护圈", "长期记忆", "高风险安全流程"], en: ["Conversation", "Emotion record", "Weekly letter", "Guardian circle", "Long-term memory", "High-risk safety workflow"] },
    role: { zh: ["设计 AI 陪伴产品结构", "设计对话到情绪记录的 Workflow", "设计每周总结与长期记录机制", "设计 Safety Workflow 与守护圈", "完成可运行 MVP"], en: ["Designed the AI companion product structure", "Designed the conversation-to-emotion-record workflow", "Designed weekly reflection and longitudinal tracking", "Designed the safety workflow and guardian-circle mechanism", "Built a runnable MVP"] },
    features: { zh: ["陪伴聊天", "情绪记录", "心情历史", "每周来信", "成长相册", "守护圈", "高风险 Safety Workflow"], en: ["Companion chat", "Emotion records", "Mood history", "Weekly letters", "Growth album", "Guardian circle", "High-risk safety workflow"] },
    reflection: { zh: "我正在学习，AI 陪伴最难的并不是让语言更像人，而是知道什么时候应该记住、什么时候应该克制，以及什么时候必须把人带回真实世界。", en: "The hardest part of AI companionship is not sounding human. It is knowing what to remember, when to hold back, and when to guide someone toward real-world support." },
    nextStep: { zh: "继续验证核心陪伴体验，改进记忆边界与安全细节；真实第三方通知等能力仍待后续接入。", en: "Keep validating the companion experience and improve memory and safety details; real third-party notification remains future work." },
    plannedAssets: [
      { path: "/media/youwozai/chat.png", title: "Chat Interface", subtitle: "A conversation space designed for continuity.", mediaType: "Product Screen", aspectRatio: "9/16", status: "COMING_SOON" },
      { path: "/media/youwozai/emotion-record.png", title: "Emotion Record", subtitle: "Emotional context over time.", mediaType: "Product Screen", aspectRatio: "9/16", status: "COMING_SOON" },
      { path: "/media/youwozai/weekly-letter.png", title: "Weekly Letter", subtitle: "Care beyond instant replies.", mediaType: "Product Screen", aspectRatio: "9/16", status: "COMING_SOON" },
      { path: "/media/youwozai/safety-workflow.png", title: "Safety Workflow", subtitle: "The documented high-risk response path.", mediaType: "Workflow", aspectRatio: "16/9", status: "IN_PROGRESS" },
    ], availableAssets: ["/media/youwozai/cover-generated.png", "/media/youwozai/cover.jpg"],
    statusLabel: { zh: "可运行 MVP · 持续完善中", en: "Runnable MVP · In Progress" },
    evidenceScreens: [
      { src: "/media/youwozai/demo-home.png", title: { zh: "和小在聊聊 · 情绪记录", en: "Companion Chat & Mood Record" }, caption: { zh: "从自由聊天进入可持续记录的情绪上下文。", en: "From open chat into a continuous emotional context." } },
    ],
    externalLinks: [
      { label: { zh: "查看 Demo", en: "View Demo" }, href: "https://youwozai-demo.jdfhd1688.chatgpt.site" },
      { label: { zh: "GitHub", en: "GitHub" }, href: "https://github.com/jdfhd1688-code/youwozai-ai-companion" },
    ],
    ctaLabel: { zh: "查看项目", en: "View Project" }, ctaHref: "/work/youwozai",
  },
  {
    id: "legal-ai-agent", number: "01", order: 1, year: "2026", group: "featured", status: "IN_PROGRESS",
    title: { zh: "企业法务合规助手", en: "Enterprise Legal AI Agent" }, subtitle: { zh: "把法律工作重新设计成系统", en: "Legal work, redesigned as a system" },
    category: { zh: "AI 解决方案 / Agent / RAG", en: "AI Solution / Agent / RAG" }, hero: "/media/legal-agent/cover-generated.png",
    statement: { zh: "如果法律工作不再是一堆文件，而是一套可追踪的流程。", en: "What if legal work became a system, instead of a pile of documents?" },
    description: { zh: "把合同解析、条款识别、法律检索和合规推理连接成一条可追踪的 AI 工作流。", en: "A traceable AI workflow connecting contract parsing, clause extraction, legal retrieval and compliance reasoning." },
    problem: { zh: "企业合同审查高度依赖人工经验：耗时、容易遗漏、标准不统一，法律依据也散落在不同资料里。", en: "Contract review relies heavily on manual experience. It is slow, inconsistent and difficult to audit across scattered sources." },
    insight: { zh: "真正有价值的不是一个会总结合同的聊天框，而是一套能把业务规则、法律知识与审查动作串起来的系统。", en: "The useful product is not a contract-summarizing chat box, but a system connecting business rules, legal knowledge and review actions." },
    solution: { zh: "当前原型以结构化输出为终点，用 RAG、规则与 Agent Workflow 分层完成审查，并保留风险判断依据与人工复核入口。", en: "The current prototype layers RAG, rules and an agent workflow to produce structured output with traceable risk grounds and human review." },
    process: { zh: ["业务梳理", "条款分类", "知识库", "推理链", "报告设计"], en: ["Business mapping", "Clause taxonomy", "Knowledge base", "Reasoning chain", "Report design"] },
    workflow: { zh: ["上传合同", "文档解析", "条款抽取", "风险识别", "法律检索", "合规推理", "结构化报告"], en: ["Upload contract", "Document parsing", "Clause extraction", "Risk detection", "Legal retrieval", "Compliance reasoning", "Structured report"] },
    directions: { zh: ["风险条款", "风险等级", "法律依据", "修改建议", "结构化审查报告", "人工复核"], en: ["Risk clauses", "Risk level", "Legal basis", "Revision suggestion", "Structured report", "Human review"] },
    role: { zh: ["拆解企业合同审查流程", "设计 RAG 法规检索链路", "设计风险分级与人工复核机制", "定义结构化报告输出", "完成可演示 Prototype"], en: ["Broke down the enterprise contract review workflow", "Designed the RAG-based legal retrieval flow", "Designed risk classification and human review logic", "Defined structured report output", "Built a demonstrable prototype"] },
    features: { zh: ["合同上传", "法规检索", "风险分级", "依据不足提示", "人工复核", "结构化报告"], en: ["Contract upload", "Legal retrieval", "Risk classification", "Insufficient-evidence fallback", "Human review", "Structured report"] },
    reflection: { zh: "我正在学习如何把一个复杂业务问题，拆成每一步都可以解释、验证和改进的 AI 工作流。", en: "I am learning how to break a complex business problem into an AI workflow where every step can be explained, tested and improved." },
    nextStep: { zh: "继续提升检索与评测质量、完善规则配置，并验证更稳定的端到端审查体验。", en: "Improve retrieval and evaluation quality, refine rule configuration, and validate a more robust end-to-end review experience." },
    plannedAssets: [
      { path: "/media/legal-agent/contract-upload.png", title: "Contract Upload", subtitle: "The entry point for a review workflow.", mediaType: "Product Screen", aspectRatio: "4/3", status: "COMING_SOON" },
      { path: "/media/legal-agent/risk-review.png", title: "Risk Review", subtitle: "Clause-level risk inspection.", mediaType: "Product Screen", aspectRatio: "4/3", status: "COMING_SOON" },
      { path: "/media/legal-agent/report.png", title: "Structured Report", subtitle: "The planned auditable review output.", mediaType: "Product Screen", aspectRatio: "4/3", status: "COMING_SOON" },
      { path: "/media/legal-agent/architecture.svg", title: "Architecture", subtitle: "The current system direction.", mediaType: "Architecture", aspectRatio: "16/9", status: "IN_PROGRESS" },
    ], availableAssets: ["/media/legal-agent/cover-generated.png", "/media/legal-agent/cover.jpg"],
    statusLabel: { zh: "当前原型 · 持续完善中", en: "Current Prototype · In Progress" },
    evidenceScreens: [
      { src: "/media/legal-agent/prototype-home.png", title: { zh: "合同审查原型界面", en: "Contract Review Prototype" }, caption: { zh: "对应 Workflow：上传、解析、检索与风险分级。", en: "Maps to upload, parsing, retrieval and risk grading." } },
    ],
    externalLinks: [
      { label: { zh: "查看当前原型", en: "View Current Prototype" }, href: "https://enterprise-legal-ai-agent.onrender.com/" },
      { label: { zh: "GitHub", en: "GitHub" }, href: "https://github.com/jdfhd1688-code/enterprise-legal-ai-agent" },
    ],
    ctaLabel: { zh: "查看项目", en: "View Project" }, ctaHref: "/work/legal-ai-agent",
  },
  {
    id: "legal-workflow-case-study", number: "03", order: 3, year: "2026", group: "featured", status: "RELEASED",
    title: { zh: "AI法律文书协作与案件管理", en: "AI Legal Document & Case Management" }, subtitle: { zh: "真实律所场景下的 Workflow 与 Human-in-the-loop 实践", en: "Real law-firm workflow and human-in-the-loop practice" },
    category: { zh: "Legal AI / Workflow / AI Solution", en: "Legal AI / Workflow / AI Solution" }, hero: "/media/legal-agent/cover-generated.png",
    statement: { zh: "在多案件并行、高频沟通与高专业要求的环境中，把案件推进、法律文书与客户反馈沉淀为可追踪、可复核、可交接的标准化流程。", en: "Turning multi-case work, high-frequency communication and professional legal writing into a traceable, reviewable and transferable workflow." },
    description: { zh: "基于湖南芙蓉律师事务所（总所）真实工作札记整理，已做公开展示脱敏处理，展示案件管理、AI文书协作、风险控制与知识沉淀方法。", en: "Based on real work notes from Hunan Furong Law Firm and de-identified for public display, this case study shows case management, AI document collaboration, risk control and knowledge capture." },
    problem: { zh: "多案件并行、不同程序节点、不同对接主体、高频沟通与文书专业准确性要求高，且法条必须人工核验，AI 不能直接承担最终法律判断。", en: "Parallel cases, shifting stages, multiple stakeholders, frequent communication and high accuracy demands make omissions likely. Statutes require human verification, so AI cannot own the final judgment." },
    insight: { zh: "这个项目首先是业务流程问题，其次才是 AI 问题。", en: "This is first a business-process problem, then an AI problem." },
    solution: { zh: "把案件管理拆成全局台账、优先级判断和每日任务，用民刑行政 SOP 标准化流程，并建立 AI 文书八步 Human-in-the-loop 工作流。", en: "Break case management into a master register, priority rules and daily tasks, standardize civil/criminal/administrative SOPs, and build an eight-step human-in-the-loop AI document workflow." },
    process: { zh: ["全局台账", "优先级判断", "每日任务", "民刑行政 SOP", "AI 文书八步", "律师审核", "客户反馈"], en: ["Master register", "Priority rules", "Daily tasks", "Civil/criminal/admin SOPs", "Eight-step AI writing", "Lawyer review", "Client feedback"] },
    workflow: { zh: ["业务理解", "材料结构化", "多模型生成", "人工整合", "法律校验", "专家审核", "用户反馈"], en: ["Business understanding", "Material structuring", "Multi-model generation", "Human integration", "Legal verification", "Expert review", "User feedback"] },
    directions: { zh: ["AI 负责初稿与辅助", "人负责事实、法律与最终表达", "权威平台核验", "交接知识沉淀"], en: ["AI supports drafting and organization", "People own facts, law and final expression", "Authoritative source verification", "Reusable handoff knowledge"] },
    reflection: { zh: "AI 输出不是最终答案，而是一个需要经过专业规则、专家判断和用户反馈持续校正的中间产物。", en: "AI output is not the final answer; it is an intermediate artifact shaped by professional rules, expert judgment and user feedback." },
    nextStep: { zh: "本案例仅用于展示个人流程设计、AI 协作、风险控制和知识沉淀方法，不构成法律意见。", en: "This case study only demonstrates workflow design, AI collaboration, risk control and knowledge capture. It is not legal advice." },
    plannedAssets: [], availableAssets: [],
    statusLabel: { zh: "真实案例 · 已完成", en: "Real Case Study" },
    cardTag: { zh: "查看完整案例 ↗", en: "View Full Case Study ↗" },
    externalLinks: [
      { label: { zh: "查看完整 PDF", en: "View Full PDF" }, href: "/reports/legal-ai-workflow-case-study.pdf" },
    ],
    ctaLabel: { zh: "查看案例", en: "View Case Study" }, ctaHref: "/work/legal-workflow-case-study",
  },
  {
    id: "ai-tool-research-2026", number: "04", order: 4, year: "2026", group: "featured", status: "RELEASED",
    title: { zh: "AI短剧 / AI剧本工具市场测评", en: "AI Short Drama & Script Tool Research" }, subtitle: { zh: "从模型能力比较到多模型编剧 Workflow", en: "From model comparison to multi-model screenwriting workflow" },
    category: { zh: "AI Research / Tool Evaluation / Workflow", en: "AI Research / Tool Evaluation / Workflow" }, hero: "/media/storytelling/cover.png",
    statement: { zh: "横向研究国内外主流 AI 编剧工具，梳理模型能力边界、工具选型、多模型协同流程与 100 分评测框架。", en: "A horizontal study of mainstream AI screenwriting tools, mapping model limits, tool selection, multi-model workflows and a 100-point evaluation framework." },
    description: { zh: "基于公开产品能力、行业报道、第三方横评与创作者社区反馈进行的桌面研究，不等同于统一实验环境下的实验室 Benchmark。", en: "Desktop research based on public product capabilities, industry reports, third-party reviews and creator community feedback. It is not a controlled laboratory benchmark." },
    problem: { zh: "中国短剧 / 漫剧创作不应依赖单一模型一键写完整剧本，需要理解不同工具适合的环节，并建立可复用的多模型编剧 Workflow。", en: "Chinese short drama and motion comic creation should not rely on one model to one-shot a full script. The work needs tool fit by stage and a repeatable multi-model workflow." },
    insight: { zh: "通用大模型负责创意、结构与推演；专业编剧 / 短剧 Agent 负责格式和生产衔接；人工编剧负责人物、情绪、节奏、合规与最终取舍。", en: "General models own creativity, structure and reasoning; professional tools own format and production; human writers own character, emotion, pacing, compliance and final judgment." },
    solution: { zh: "拆解五类共性痛点，比较通用模型、专业编剧工具与短剧 Agent，并沉淀八步 Workflow 和 100 分评测框架。", en: "Identify five shared pain points, compare general models, professional screenwriting tools and short-drama agents, and capture an eight-step workflow and 100-point scoring framework." },
    process: { zh: ["桌面研究", "工具分类", "能力比较", "Workflow 设计", "评测框架"], en: ["Desktop research", "Tool taxonomy", "Capability comparison", "Workflow design", "Evaluation framework"] },
    workflow: { zh: ["市场研究", "故事架构", "Story Bible", "短剧化", "剧本一稿", "多模型审稿", "人工终审", "进入生产"], en: ["Market research", "Story architecture", "Story Bible", "Short-drama adaptation", "First draft", "Multi-model review", "Human final review", "Production"] },
    directions: { zh: ["通用模型", "专业编剧工具", "短剧 / 漫剧 Agent", "多模型协同", "100 分评测"], en: ["General models", "Professional screenwriting tools", "Short drama / motion comic agents", "Multi-model collaboration", "100-point evaluation"] },
    reflection: { zh: "没有一个模型适合从创意直接一键生成精品短剧；更成熟的生产方式是通用模型、垂直工具与人工编剧各司其职。", en: "No single model can one-shot a polished short drama; a mature production process gives general models, vertical tools and human writers distinct roles." },
    nextStep: { zh: "建议用同一题材、同一背景与同一输出要求对主要工具做横向测试，并记录 Prompt、版本、首轮结果、二轮修正与人工修改量。", en: "Next step is a controlled comparison using the same premise, background and output requirements, recording prompts, versions, first-round results, revisions and human editing load." },
    plannedAssets: [], availableAssets: [],
    statusLabel: { zh: "桌面研究 · 已完成", en: "Desktop Research" },
    cardTag: { zh: "查看完整研究 ↗", en: "View Full Report ↗" },
    externalLinks: [
      { label: { zh: "查看完整报告 PDF", en: "View Full Report PDF" }, href: "/reports/ai-script-tool-research-2026.pdf" },
    ],
    ctaLabel: { zh: "查看报告", en: "View Report" }, ctaHref: "/work/ai-tool-research-2026",
  },
  {
    id: "short-drama", number: "05", order: 5, year: "2025 — 2026", group: "released", status: "RELEASED",
    title: { zh: "小说 IP 改编与短剧编剧", en: "IP Adaptation & Short Drama" }, subtitle: { zh: "从小说 IP 到正式发行短剧", en: "From Novel IP to Released Motion Comic" },
    category: { zh: "小说 IP 改编 / 短剧编剧", en: "IP Adaptation / Screenwriting" }, hero: "/media/storytelling/cover.png",
    statement: { zh: "把一个长篇故事，重新写成观众愿意继续点下一集的结构。", en: "Turning long-form IP into short-form episodic stories." },
    description: { zh: "两部来自不同受众与类型的小说 IP，被重新组织为短篇幅、连续推进的分集叙事。", en: "Two novel IPs for different audiences, restructured into short, continuous episodic narratives." },
    problem: { zh: "长篇小说不能只靠删减变成短剧，每一集都需要新的进入点、冲突与继续观看的理由。", en: "A long novel cannot become short drama through compression alone. Every episode needs an entry point, conflict and a reason to continue." },
    insight: { zh: "同样的短剧形式，面对不同受众，需要完全不同的叙事引擎。", en: "The same short-form format needs a different narrative engine for each audience." },
    solution: { zh: "围绕受众定位、人物重组、冲突提前、分集设计和钩子节奏，完成两部作品的改编与编剧。", en: "Both works were adapted through audience positioning, character restructuring, earlier conflict, episode design and hook pacing." },
    process: { zh: ["IP 拆解", "受众定位", "结构重组", "分集设计", "剧本创作"], en: ["IP analysis", "Audience positioning", "Story restructuring", "Episode design", "Screenwriting"] },
    workflow: { zh: [], en: [] }, directions: { zh: [], en: [] },
    reflection: { zh: "两部作品已经制作并发行，但商业表现没有达到预期。完成作品，与让用户持续观看，是两个不同的问题。", en: "Both works were produced and released, but their commercial performance did not meet expectations. Finishing a work and sustaining attention are two different problems." },
    nextStep: { zh: "继续把开篇钩子、冲突密度、用户匹配和付费节点作为需要验证的问题。", en: "Keep testing opening hooks, conflict density, audience fit and paywall anticipation as questions rather than assumed answers." },
    plannedAssets: [], availableAssets: ["/media/storytelling/cover.png"],
    statusLabel: { zh: "两部作品已发行", en: "2 Released Works" },
    ctaLabel: { zh: "查看两部作品", en: "Explore the Works" }, ctaHref: "/work/short-drama",
  },
  {
    id: "felicity-south-africa", number: "06", order: 6, year: "LIVE", group: "released", status: "LIVE",
    title: { zh: "南非市场数字化落地", en: "South Africa Digital Launch" }, subtitle: { zh: "Felicity Solar 南非官网", en: "Felicity Solar South Africa" },
    category: { zh: "真实商业交付 / 南非市场", en: "Commercial Delivery / South Africa" }, hero: "/media/hero/hero-road.png",
    statement: { zh: "从南非本地业务需求，到一个真正上线的商业官网。", en: "From local market needs to a live commercial website." },
    description: { zh: "在约三周内，参与完成 Felicity Solar South Africa 官网从零搭建到正式上线。", en: "A roughly three-week, zero-to-launch website delivery for Felicity Solar South Africa." },
    problem: { zh: "南非本地业务需要一个能够承载公司、产品与市场资料的正式线上入口。", en: "The South African business needed a live destination for company, product and market-facing information." },
    insight: { zh: "真实交付不仅是制作页面，也包括梳理信息、准备内容与素材，并推动各部分按时进入上线状态。", en: "Real delivery goes beyond pages: information, product content, media and launch coordination all have to arrive together." },
    solution: { zh: "参与网站搭建、页面与信息整理、产品内容、图片视频和价格资料准备，以及上线推进。", en: "The work covered website setup, information and product-content organization, media and price-list preparation, and launch coordination." },
    process: { zh: ["业务需求", "页面与信息", "产品内容", "媒体与价格资料", "上线推进"], en: ["Business needs", "Pages and information", "Product content", "Media and price materials", "Launch coordination"] },
    workflow: { zh: [], en: [] }, directions: { zh: [], en: [] },
    reflection: { zh: "这次交付让我更具体地理解：把内容、资料与协作组织好，本身就是产品落地的一部分。", en: "This delivery made one thing concrete: organizing content, materials and coordination is part of shipping the product." },
    nextStep: { zh: "官网已上线并持续作为南非业务的真实线上入口。", en: "The website is live as a real digital presence for the South African business." },
    plannedAssets: [], availableAssets: [],
    statusLabel: { zh: "已上线", en: "LIVE" },
    evidenceScreens: [
      { src: "/media/felicity/home.png", title: { zh: "Felicity Solar South Africa 官网", en: "Felicity Solar South Africa Website" }, caption: { zh: "真实上线商业官网首页。", en: "Live commercial website homepage." } },
    ],
    ctaLabel: { zh: "查看项目", en: "View Project" }, ctaHref: "/work/felicity-south-africa",
  },
];

export const getProject = (id: string) => projects.find((project) => project.id === (id === "ai-storytelling" ? "short-drama" : id));
export const localize = (value: LocalizedText | undefined, locale: Locale) => value?.[locale] ?? value?.zh ?? "";
