import { BookOpen, Boxes, Code2, Factory, Landmark, Network, ShieldCheck, Share2, RadioTower, SearchCheck } from "lucide-react";

export const externalLinks = {
  github: "https://github.com/iDC-NEU/YiGraph",
  docs: "https://idc-neu.github.io/YiGraphDocs",
  paper: "https://arxiv.org/abs/2602.21604",
};

export const capabilities = [
  { icon: Share2, number: "01", title: "自然语言驱动分析", text: "描述业务问题，YiGraph 自动理解意图、规划步骤并执行图分析。" },
  { icon: Network, number: "02", title: "LLM 与图算法融合", text: "让大模型负责理解与编排，让确定性图算法保证结果可靠、可复现。" },
  { icon: ShieldCheck, number: "03", title: "可追溯报告生成", text: "完整记录数据来源、分析路径和算法结果，让每一个结论都有据可查。" },
];

export const cases = [
  { category: "金融", icon: Landmark, title: "金融风险关系识别", text: "从交易网络出发，识别可疑路径并汇总资金流分析依据。", result: "演示案例 · 查看分析过程" },
  { category: "电信", icon: RadioTower, title: "电信网络关键基站分析", text: "从基站迁移图中识别核心节点与路径瓶颈，辅助运维评估。", result: "演示案例 · 查看样例报告" },
  { category: "制造", icon: Factory, title: "工业故障诊断与修复", text: "连接设备、传感器、工艺和质检数据，追踪故障根因并生成修复建议。", result: "演示案例 · 查看诊断过程" },
  { category: "纪检", icon: SearchCheck, title: "多源数据关联核查", text: "从人员、流水、采购、资产与住宿记录中梳理线索，生成可追溯核查报告。", result: "演示案例 · 查看核查流程" },
];

export const articles = [
  { title: "工业故障为什么总是查不清？YiGraph 给出了一种新的解法", category: "制造", text: "从生产数据构图到根因定位、相似故障检索与修复建议。", href: "https://mp.weixin.qq.com/s/MHcNQVf4rPhrEzVDzBEkLw" },
  { title: "都叫“图智能”，KBQA、GraphRAG 和 YiGraph 到底有什么不同？", category: "技术解读", text: "了解知识查询、图增强检索与端到端图分析的能力和工作流程。", href: "https://mp.weixin.qq.com/s/Z2SlUVdOzTiqH96Vc9Y63Q" },
  { title: "基站一堵，全网变慢？YiGraph 帮你自动生成扩容与流量卸载建议", category: "电信", text: "将用户上网轨迹组织为迁移图，识别关键基站与网络瓶颈。", href: "https://mp.weixin.qq.com/s/0naJlLwDbmtQcIPrmtn8vA" },
  { title: "流水看得见，风险说不清？YiGraph 帮你自动追踪洗钱路径", category: "金融", text: "从交易流水构图到资金路径追踪与结构化风险报告。", href: "https://mp.weixin.qq.com/s/ShZiothKsoCMWlfq7J6d-Q" },
  { title: "60秒看懂 YiGraph：从多源文件到可追溯核查报告", category: "纪检", text: "通过多源业务文件，梳理资金、人员、资产和轨迹之间的关联。", href: "https://mp.weixin.qq.com/s/KCK-uYPhIg3F3Tf6wMthMQ" },
  { title: "YiGraph v1.1 发布：让图分析更简单，让关系洞察更清晰", category: "版本介绍", text: "了解 GraphRAG、图算法知识库、图学习与表格构图的更新。", href: "https://mp.weixin.qq.com/s/9AOeb5gL-WA4xMwgMn8E_A" },
  { title: "发现关联关系，释放数据价值｜易图（YiGraph）", category: "产品介绍", text: "了解 YiGraph 的产品定位、AAG 架构与自然语言分析流程。", href: "https://mp.weixin.qq.com/s/fngC5qmjIgwBkhR4wo5yxw" },
];

export const resources = [
  { icon: Code2, label: "OPEN SOURCE", title: "GitHub 仓库", text: "查看 YiGraph 源代码、版本更新与社区协作进展。", action: "访问仓库", href: externalLinks.github },
  { icon: BookOpen, label: "DOCUMENTATION", title: "用户手册", text: "从安装部署到分析工作流，系统了解 YiGraph 的使用方式。", action: "查看手册", href: externalLinks.docs },
  { icon: Boxes, label: "RESEARCH", title: "AAG 学术论文", text: "阅读 YiGraph 的研究方法、系统设计与实验结果。", action: "阅读论文", href: externalLinks.paper },
];
