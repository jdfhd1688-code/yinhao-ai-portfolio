export type LocalizedString = { zh: string; en: string };

export const legalWorkflow = {
  kpis: [
    { value: "30+", label: { zh: "多类型案件并行跟进", en: "Parallel multi-type cases" } },
    { value: "8", label: { zh: "AI 文书协作 SOP", en: "AI document collaboration SOP" } },
    { value: "3", label: { zh: "民事 / 刑事 / 行政流程", en: "Civil / criminal / administrative tracks" } },
    { value: "2+", label: { zh: "模型并行生成与交叉比较", en: "Parallel model drafts and comparison" } },
  ],
  problem: [
    { zh: "多案件并行推进，节点和对接主体不同", en: "Multiple cases run in parallel with different stages and stakeholders" },
    { zh: "高频沟通与交接容易遗漏信息", en: "High-frequency communication makes handoffs prone to omissions" },
    { zh: "法律文书对专业准确性要求极高", en: "Legal documents require very high professional accuracy" },
    { zh: "法条必须人工核验，AI 不能直接承担最终判断", en: "Statutes must be verified by a person; AI cannot own the final legal judgment" },
  ],
  caseManagement: [
    { zh: "全局案件进展汇总表", en: "Master case progress register" },
    { zh: "红 / 黄 / 绿优先级判断", en: "Red / yellow / green priority rules" },
    { zh: "每日 To-do List 与任务闭环", en: "Daily to-do list and task closure" },
  ],
  sops: [
    { type: { zh: "民事", en: "Civil" }, stages: { zh: ["立案", "开庭", "执行"], en: ["Filing", "Hearing", "Enforcement"] }, actions: { zh: "起诉状、证据材料、代理手续、庭前沟通、执行申请", en: "Complaint, evidence, representation documents, pre-hearing communication, enforcement application" } },
    { type: { zh: "刑事", en: "Criminal" }, stages: { zh: ["立案", "侦查", "起诉", "审判"], en: ["Filing", "Investigation", "Prosecution", "Trial"] }, actions: { zh: "控告书、证据目录、会见、阅卷、法律意见、辩护词", en: "Accusation, evidence index, meetings, file review, legal opinion, defense statement" } },
    { type: { zh: "行政", en: "Administrative" }, stages: { zh: ["行政复议筛查", "确认被告", "确认管辖法院", "立案", "开庭", "执行跟进"], en: ["Reconsideration screening", "Confirm defendant", "Confirm jurisdiction", "Filing", "Hearing", "Enforcement follow-up"] }, actions: { zh: "确认被告及管辖、起诉材料、代理词、电话跟进", en: "Confirm defendant and jurisdiction, filing materials, representation statement, phone follow-up" } },
  ],
  eightSteps: [
    { zh: "捋清案件逻辑", en: "Clarify case logic", detail: { zh: "明确事实、争议焦点、请求与法律关系。", en: "Clarify facts, disputes, claims and legal relationships." } },
    { zh: "材料文本化", en: "Turn materials into text", detail: { zh: "将案件材料整理为可复制、可输入模型的文本。", en: "Organize case materials into copyable, model-ready text." } },
    { zh: "多模型并行生成", en: "Generate with multiple models", detail: { zh: "至少调用两个不同 AI，按明确指令生成起诉状等特定文书。", en: "Use at least two different AI tools to draft specific documents such as a complaint." } },
    { zh: "择优整合 + 去机械化", en: "Integrate and de-mechanize", detail: { zh: "比较多个版本，结合律所模板和法律逻辑人工整合、改写与格式化。", en: "Compare versions, then merge, revise and format with internal templates and legal reasoning." } },
    { zh: "法文本校", en: "Legal text verification", detail: { zh: "核对法律名称、条号、具体内容，检查错字、漏字、标点与格式。", en: "Check statute names, article numbers and content, plus typos, omissions, punctuation and format." } },
    { zh: "专业律师审核", en: "Lawyer review", detail: { zh: "提交负责律师审核，接受专业意见。", en: "Submit the draft to the responsible lawyer for review." } },
    { zh: "二次校", en: "Second verification", detail: { zh: "法条变更或内容修改后，再次核验并校正文书。", en: "Re-verify and correct after statutory changes or content edits." } },
    { zh: "客户确认与迭代", en: "Client confirmation and iteration", detail: { zh: "交付当事人确认，根据反馈继续完善并再次校正。", en: "Deliver for client confirmation, then refine and re-check based on feedback." } },
  ],
  workflowAbstract: [
    { zh: "业务理解", en: "Business understanding" },
    { zh: "材料结构化", en: "Material structuring" },
    { zh: "多模型生成", en: "Multi-model generation" },
    { zh: "人工整合", en: "Human integration" },
    { zh: "法律校验", en: "Legal verification" },
    { zh: "专家审核", en: "Expert review" },
    { zh: "用户反馈", en: "User feedback" },
  ],
  riskControl: {
    ai: [
      { zh: "初稿生成", en: "Draft generation" },
      { zh: "信息整理", en: "Information organization" },
      { zh: "多版本生成", en: "Multiple draft versions" },
      { zh: "文本辅助", en: "Text assistance" },
    ],
    human: [
      { zh: "事实判断", en: "Fact judgment" },
      { zh: "法律适用", en: "Legal application" },
      { zh: "风险判断", en: "Risk judgment" },
      { zh: "最终审核", en: "Final review" },
      { zh: "客户交付", en: "Client delivery" },
    ],
  },
  tools: [
    { task: { zh: "材料数字化", en: "Material digitization" }, tool: "扫描全能王、WPS", purpose: { zh: "扫描、文本 / 图片转 Word / PDF、文档编辑、录音转文字", en: "Scanning, image/text conversion, document editing, recording transcription" } },
    { task: { zh: "AI 辅助", en: "AI assistance" }, tool: "通用 AI 助手", purpose: { zh: "文书初稿、法条 / 案例辅助查询、文本问答；结果必须人工复核", en: "Drafting, statute/case lookup and Q&A; results must be human-reviewed" } },
    { task: { zh: "法院业务", en: "Court services" }, tool: "人民法院律师服务平台、广东法院诉讼服务网", purpose: { zh: "线上立案及诉讼服务", en: "Online filing and litigation services" } },
    { task: { zh: "检察业务", en: "Prosecution services" }, tool: "12309 中国检察网", purpose: { zh: "刑事案件线上业务、申请查阅卷宗", en: "Online criminal case services and file access" } },
    { task: { zh: "工商核验", en: "Company verification" }, tool: "国家企业信用信息公示系统", purpose: { zh: "获取企业官方工商信息", en: "Official enterprise registration information" } },
    { task: { zh: "法律核验", en: "Legal verification" }, tool: "国家法律法规数据库", purpose: { zh: "人工核对现行有效法律法规", en: "Manual verification of effective laws and regulations" } },
  ],
  capabilityMapping: [
    { practice: { zh: "红黄绿案件台账 + To-do", en: "R/Y/G case register + to-do" }, capability: { zh: "状态管理 / Workflow / 优先级管理", en: "State management / workflow / prioritization" } },
    { practice: { zh: "民 / 刑 / 行政案件 SOP", en: "Civil / criminal / administrative SOPs" }, capability: { zh: "业务流程拆解 / 标准化 / 知识沉淀", en: "Process decomposition / standardization / knowledge capture" } },
    { practice: { zh: "AI 文书八部曲", en: "Eight-step AI document workflow" }, capability: { zh: "Prompt / 多模型协同 / Human-in-the-loop / 质量控制", en: "Prompt / multi-model collaboration / human-in-the-loop / quality control" } },
    { practice: { zh: "法条 / 工商 / 诉讼平台核验", en: "Statute / registry / court verification" }, capability: { zh: "权威数据源 / RAG 意识 / 可追溯", en: "Authoritative sources / RAG awareness / traceability" } },
    { practice: { zh: "律师审核 + 客户确认", en: "Lawyer review + client confirmation" }, capability: { zh: "专家审核 / 用户反馈 / 迭代", en: "Expert review / user feedback / iteration" } },
    { practice: { zh: "交接手册", en: "Handoff notes" }, capability: { zh: "知识管理 / 团队协作 / 可复用资产", en: "Knowledge management / collaboration / reusable assets" } },
  ],
  reportPath: "/reports/legal-ai-workflow-case-study.pdf",
};
