export type ProjectStatusValue = "IN_PROGRESS" | "PROTOTYPING" | "PRODUCTION" | "CASE_STUDY_PENDING" | "COMING_SOON";

export type PlannedAsset = {
  path: string;
  title: string;
  subtitle: string;
  mediaType: "Product Screen" | "Workflow" | "Architecture" | "Film Poster" | "Storyboard" | "Film" | "Visual Frame";
  aspectRatio: "16/9" | "4/3" | "3/4" | "9/16";
  status: ProjectStatusValue;
};

export type Project = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  year: string;
  category: string;
  status: ProjectStatusValue;
  hero: string;
  statement: string;
  description: string;
  problem: string;
  insight: string;
  solution: string;
  process: string[];
  workflow: string[];
  directions: string[];
  reflection: string;
  nextStep: string;
  plannedAssets: PlannedAsset[];
  availableAssets: string[];
  ctaLabel: string;
  ctaHref: string;
  isComplete: boolean;
};

export const projects: Project[] = [
  {
    id: "youwozai",
    number: "01",
    title: "有我在",
    subtitle: "YOUWOZAI · AI Companion",
    year: "2026",
    category: "AI Product / Human Connection",
    status: "PROTOTYPING",
    hero: "/media/youwozai/cover-generated.png",
    statement: "What if AI could remember how you felt, not just what you said?",
    description: "一个关于记忆、理解与长期陪伴的 AI 产品探索。它不只及时回复，也尝试延续人与人之间才有的关心。",
    problem: "多数 AI 对话产品擅长回答，却很难记住情绪的来处，也难以建立一段连续的关系。",
    insight: "陪伴不是更快的回复。它包含记忆、理解、延续，以及在合适的时候主动关心。",
    solution: "围绕聊天、情绪记录、每周来信、守护圈与长期记忆，设计一条同时照顾体验与安全的产品路径。",
    process: ["Context", "Emotional needs", "Memory model", "Safety design", "Prototype"],
    workflow: ["User message", "Intent / emotion", "Memory retrieval", "Risk detection", "Context assembly", "LLM response", "Emotional record", "Long-term memory"],
    directions: ["和小在聊聊", "情绪记录", "每周来信", "守护圈", "长期记忆", "High-risk safety workflow"],
    reflection: "我正在学习，AI 陪伴最难的并不是让语言更像人，而是知道什么时候应该记住、什么时候应该克制，以及什么时候必须把人带回真实世界。",
    nextStep: "继续验证核心陪伴流程，并把安全设计落实到可测试的产品原型中。",
    plannedAssets: [
      { path: "/media/youwozai/chat.png", title: "Chat Interface", subtitle: "A conversation space designed for continuity.", mediaType: "Product Screen", aspectRatio: "9/16", status: "COMING_SOON" },
      { path: "/media/youwozai/emotion-record.png", title: "Emotion Record", subtitle: "A quiet record of emotional context over time.", mediaType: "Product Screen", aspectRatio: "9/16", status: "COMING_SOON" },
      { path: "/media/youwozai/weekly-letter.png", title: "Weekly Letter", subtitle: "A slower form of care beyond instant replies.", mediaType: "Product Screen", aspectRatio: "9/16", status: "COMING_SOON" },
      { path: "/media/youwozai/guardian-circle.png", title: "Guardian Circle", subtitle: "A bridge back to trusted people when needed.", mediaType: "Product Screen", aspectRatio: "9/16", status: "COMING_SOON" },
      { path: "/media/youwozai/safety-workflow.png", title: "Safety Workflow", subtitle: "The documented high-risk response path.", mediaType: "Workflow", aspectRatio: "16/9", status: "IN_PROGRESS" },
      { path: "/media/youwozai/demo.mp4", title: "Prototype Demo", subtitle: "A walkthrough of the working product direction.", mediaType: "Film", aspectRatio: "16/9", status: "COMING_SOON" },
    ],
    availableAssets: ["/media/youwozai/cover-generated.png", "/media/youwozai/cover.jpg"],
    ctaLabel: "View project direction",
    ctaHref: "/work/youwozai",
    isComplete: false,
  },
  {
    id: "legal-ai-agent",
    number: "02",
    title: "Enterprise Legal AI Agent",
    subtitle: "Legal work, redesigned as a system",
    year: "2026",
    category: "AI Solution / Agent / RAG",
    status: "IN_PROGRESS",
    hero: "/media/legal-agent/cover-generated.png",
    statement: "What if legal work became a system, instead of a pile of documents?",
    description: "把合同解析、条款识别、法律检索和合规推理连接成一条可追踪的 AI 工作流。",
    problem: "企业合同审查高度依赖人工经验：耗时、容易遗漏、标准不统一，法律依据也散落在不同资料里。",
    insight: "真正有价值的不是一个会总结合同的聊天框，而是一套能把业务规则、法律知识与审查动作串起来的系统。",
    solution: "以结构化输出为终点，用 RAG、规则与 Agent Workflow 分层完成审查，并保留每一条风险判断的依据。",
    process: ["Business mapping", "Clause taxonomy", "Knowledge base", "Reasoning chain", "Report design"],
    workflow: ["Upload contract", "Document parsing", "Clause extraction", "Risk detection", "Legal retrieval", "Compliance reasoning", "Structured report"],
    directions: ["风险条款", "风险等级", "法律依据", "修改建议", "结构化审查报告"],
    reflection: "我正在学习如何把一个复杂业务问题，拆成每一步都可以解释、验证和改进的 AI Workflow。",
    nextStep: "把规划中的知识层、推理层和结构化输出连接成可验证的端到端原型。",
    plannedAssets: [
      { path: "/media/legal-agent/contract-upload.png", title: "Contract Upload", subtitle: "The entry point for a review workflow.", mediaType: "Product Screen", aspectRatio: "4/3", status: "COMING_SOON" },
      { path: "/media/legal-agent/risk-review.png", title: "Risk Review", subtitle: "Clause-level risk inspection and context.", mediaType: "Product Screen", aspectRatio: "4/3", status: "COMING_SOON" },
      { path: "/media/legal-agent/legal-basis.png", title: "Legal Basis", subtitle: "Retrieved rules and supporting references.", mediaType: "Product Screen", aspectRatio: "4/3", status: "COMING_SOON" },
      { path: "/media/legal-agent/revision-suggestion.png", title: "Revision Suggestion", subtitle: "Structured language for the next review step.", mediaType: "Product Screen", aspectRatio: "4/3", status: "COMING_SOON" },
      { path: "/media/legal-agent/report.png", title: "Structured Report", subtitle: "The planned auditable review output.", mediaType: "Product Screen", aspectRatio: "4/3", status: "COMING_SOON" },
      { path: "/media/legal-agent/architecture.svg", title: "Architecture Diagram", subtitle: "A production-ready view of the full system.", mediaType: "Architecture", aspectRatio: "16/9", status: "IN_PROGRESS" },
      { path: "/media/legal-agent/demo.mp4", title: "System Demo", subtitle: "An end-to-end workflow demonstration.", mediaType: "Film", aspectRatio: "16/9", status: "COMING_SOON" },
    ],
    availableAssets: ["/media/legal-agent/cover-generated.png", "/media/legal-agent/cover.jpg"],
    ctaLabel: "Explore the system direction",
    ctaHref: "/work/legal-ai-agent",
    isComplete: false,
  },
  {
    id: "ai-storytelling",
    number: "03",
    title: "AI Storytelling",
    subtitle: "Stories, characters and worlds made with AI",
    year: "2025 — 2026",
    category: "Creative Portfolio / Film",
    status: "PRODUCTION",
    hero: "/media/storytelling/cover-generated.png",
    statement: "And sometimes, I just wanted to tell a story.",
    description: "AI 不只解决问题。它也可以帮助一个人把脑海里的角色、镜头与世界真正做出来。",
    problem: "从一个故事念头到可观看的成片，中间横跨剧本、分镜、角色一致性、声音与剪辑，任何一环都会让世界失去连贯。",
    insight: "生成不是创作的终点。真正重要的是视觉方向、叙事判断，以及在不同工具之间守住同一个世界。",
    solution: "建立可重复的 AI 内容生产管线，让概念、角色、画面、声音和剪辑在同一个创作方向下推进。",
    process: ["Story", "Character design", "Visual direction", "Storyboard", "Prompt system", "Film production"],
    workflow: ["Concept", "Script", "Storyboard", "Character consistency", "Image generation", "Video generation", "Voice / music", "Editing", "Film in progress"],
    directions: ["角色设定", "视觉风格测试", "动态分镜", "短片片段", "可复用生产流程"],
    reflection: "AI 加快了制作，却没有替我做选择。越多画面变得容易生成，越需要知道什么值得留下。",
    nextStep: "继续视觉开发与分镜制作，再把稳定的角色和镜头推进为第一段可观看序列。",
    plannedAssets: [
      { path: "/media/storytelling/poster-01.jpg", title: "Film Poster", subtitle: "The first finished poster from the developing world.", mediaType: "Film Poster", aspectRatio: "3/4", status: "IN_PROGRESS" },
      { path: "/media/storytelling/character-01.jpg", title: "Character Study", subtitle: "A consistency study for the central character.", mediaType: "Visual Frame", aspectRatio: "3/4", status: "IN_PROGRESS" },
      { path: "/media/storytelling/storyboard-01.jpg", title: "Storyboard", subtitle: "The opening sequence in editorial frames.", mediaType: "Storyboard", aspectRatio: "16/9", status: "IN_PROGRESS" },
      { path: "/media/storytelling/frame-01.jpg", title: "Production Frame 01", subtitle: "A selected frame from visual development.", mediaType: "Visual Frame", aspectRatio: "16/9", status: "COMING_SOON" },
      { path: "/media/storytelling/frame-02.jpg", title: "Production Frame 02", subtitle: "A second selected frame from visual development.", mediaType: "Visual Frame", aspectRatio: "16/9", status: "COMING_SOON" },
      { path: "/media/storytelling/preview-01.mp4", title: "Sequence Preview", subtitle: "A short preview from the film in production.", mediaType: "Film", aspectRatio: "16/9", status: "COMING_SOON" },
      { path: "/media/storytelling/final-film-01.mp4", title: "Final Film", subtitle: "The completed sequence will live here.", mediaType: "Film", aspectRatio: "16/9", status: "COMING_SOON" },
    ],
    availableAssets: ["/media/storytelling/cover-generated.png", "/media/storytelling/cover.png"],
    ctaLabel: "Enter the production archive",
    ctaHref: "/work/ai-storytelling",
    isComplete: false,
  },
];

export const getProject = (id: string) => projects.find((project) => project.id === id);
