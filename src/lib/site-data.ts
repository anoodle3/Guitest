import { BookOpen, Boxes, Building2, Code2, Factory, FlaskConical, HeartPulse, Landmark, Network, ShieldCheck, Share2, RadioTower } from "lucide-react";

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
  { category: "科研", icon: FlaskConical, title: "科研知识图谱探索", text: "连接论文、作者、机构与主题，发现跨学科知识脉络。", result: "应用场景 · 演示待补充" },
  { category: "制造", icon: Factory, title: "供应链风险洞察", text: "梳理多层供应关系，快速识别关键节点与潜在断点。", result: "应用场景 · 演示待补充" },
  { category: "医疗", icon: HeartPulse, title: "医疗知识关联分析", text: "连接疾病、症状、药物与医学文献，辅助研究人员梳理证据关系。", result: "应用场景 · 演示待补充" },
  { category: "企业", icon: Building2, title: "企业关系穿透分析", text: "穿透股权、任职与投资关系，形成清晰的关系证据链。", result: "应用场景 · 演示待补充" },
];

export const resources = [
  { icon: Code2, label: "OPEN SOURCE", title: "GitHub 仓库", text: "查看 YiGraph 源代码、版本更新与社区协作进展。", action: "访问仓库", href: externalLinks.github },
  { icon: BookOpen, label: "DOCUMENTATION", title: "用户手册", text: "从安装部署到分析工作流，系统了解 YiGraph 的使用方式。", action: "查看手册", href: externalLinks.docs },
  { icon: Boxes, label: "RESEARCH", title: "AAG 学术论文", text: "阅读 YiGraph 的研究方法、系统设计与实验结果。", action: "阅读论文", href: externalLinks.paper },
];
