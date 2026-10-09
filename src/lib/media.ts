export const mediaUrl = (file: string) => `${import.meta.env.BASE_URL}media/${file}`;

export type DemoImage = {
  title: string;
  file: string;
  caption: string;
};

export const financeImages: DemoImage[] = [
  { title: "提出问题", file: "finance-query.webp", caption: "以自然语言描述分析目标，在会话中选择数据与交互模式。" },
  { title: "理解意图", file: "finance-understanding.webp", caption: "识别问题中的账户、资金路径和需要验证的风险线索。" },
  { title: "匹配算法", file: "finance-algorithms.webp", caption: "把目标拆解为子任务，为各步骤匹配图算法和数据处理工具。" },
  { title: "规划 DAG", file: "finance-workflow.webp", caption: "用 DAG 呈现任务之间的逻辑顺序与数据依赖。" },
  { title: "执行分析", file: "finance-execution.webp", caption: "展示子任务的执行过程、计算输出和结果图表。" },
  { title: "生成报告", file: "finance-report.webp", caption: "汇总资金流分析结论、关键路径与计算依据。" },
  { title: "复核建议", file: "finance-review.webp", caption: "在示例报告中整理后续核查建议，便于分析人员继续复核。" },
];

export const telecomImages: DemoImage[] = [
  { title: "构建关系图", file: "telecom-data.webp", caption: "数据转换示意：把用户上网轨迹组织为基站迁移图。" },
  { title: "描述业务目标", file: "telecom-query.webp", caption: "提出关键瓶颈基站识别问题，并要求给出扩容与流量卸载建议。" },
  { title: "规划算法流程", file: "telecom-workflow.webp", caption: "围绕核心基站与路径瓶颈，规划 Core Number、K-Core 和介数中心性分析。" },
  { title: "阅读分析报告", file: "telecom-report.webp", caption: "样例报告识别中山公园基站 B1240，并给出核心层与介数中心性等计算依据。" },
];

export type DemoVideoItem = {
  category: string;
  title: string;
  description: string;
  file: string;
  poster: string;
  duration: string;
};

export const manufacturingImages: DemoImage[] = [
  { title: "分析质量异常", file: "manufacturing-demo-0.webp", caption: "围绕生产批次的含水率异常，展开设备与工艺参数的根因分析。" },
  { title: "检索相似故障", file: "manufacturing-demo-1.webp", caption: "在多轮分析中继续检索历史故障案例，为修复方案提供依据。" },
  { title: "生成修复建议", file: "manufacturing-demo-2.webp", caption: "整理处置措施、检查步骤与恢复验证要求，辅助后续排障。" },
];

export const inspectionImages: DemoImage[] = [
  { title: "多源文件构图", file: "inspection-demo-0.webp", caption: "接入人员、银行交易、采购、财产和住宿等业务文件，组织关联关系。" },
  { title: "追踪资金链", file: "inspection-demo-1.webp", caption: "在演示数据中展开多跳路径搜索，呈现资金与人员之间的关联线索。" },
  { title: "初步核查报告", file: "inspection-demo-2.webp", caption: "汇总演示中的资金、资产与轨迹证据，并给出后续核查建议。" },
];

export const productDemo: DemoVideoItem = {
  category: "产品演示",
  title: "新版产品演示：风险核查与关系分析（英文）",
  description: "3 分 57 秒英文讲解，展示交易数据构图、账户风险分析、证据报告与潜在交易伙伴识别。",
  file: "product-overview.mp4",
  poster: "product-overview-poster.webp",
  duration: "03:57",
};

export const financeDemo: DemoVideoItem = {
  category: "金融",
  title: "金融交易网络分析：从图数据到报告",
  description: "1 分 7 秒录屏，展示上传交易流水、自动构图、风险分析、资金路径与结构化报告。",
  file: "finance-demo.mp4",
  poster: "finance-demo-poster.webp",
  duration: "01:07",
};

export const videos: DemoVideoItem[] = [
  financeDemo,
  {
    category: "金融",
    title: "可疑账户分析与资金统计",
    description: "54 秒录屏，展示分析任务规划、账户与交易统计、资金路径结果和报告阅读。",
    file: "finance-account-demo.mp4",
    poster: "finance-account-poster.webp",
    duration: "00:54",
  },
  {
    title: "关键基站识别与扩容建议",
    category: "电信",
    description: "1 分 15 秒录屏，从用户上网轨迹构建基站迁移图，分析网络核心与瓶颈并生成运维报告。",
    file: "telecom-demo.mp4",
    poster: "telecom-demo-poster.webp",
    duration: "01:15",
  },
  {
    category: "制造",
    title: "工业故障诊断与修复",
    description: "2 分 27 秒录屏，围绕生产质量异常开展根因分析、相似故障检索和修复方案生成。",
    file: "manufacturing-demo.mp4",
    poster: "manufacturing-demo-poster.webp",
    duration: "02:27",
  },
  {
    category: "纪检",
    title: "多源文件关联核查与报告生成",
    description: "1 分 6 秒录屏，将人员、流水、采购、资产与住宿记录关联起来，追踪线索并生成初步核查报告。",
    file: "inspection-demo.mp4",
    poster: "inspection-demo-poster.webp",
    duration: "01:06",
  },
  productDemo,
];
