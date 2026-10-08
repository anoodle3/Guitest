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

export const financeDemo: DemoVideoItem = {
  category: "金融",
  title: "金融交易网络分析：从图数据到报告",
  description: "56 秒操作录屏，展示查看图数据、自然语言提问、DAG 规划、算法执行与分析结果。",
  file: "finance-demo.mp4",
  poster: "finance-demo-poster.webp",
  duration: "00:56",
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
    category: "产品演示",
    title: "产品界面与图数据探索",
    description: "22 秒浏览产品界面，查看算法库、数据集与文件管理，以及关系图探索视图。",
    file: "product-overview.mp4",
    poster: "product-overview-poster.webp",
    duration: "00:22",
  },
];
