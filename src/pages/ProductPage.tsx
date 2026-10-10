import { ArrowRight, BarChart3, Database, FileCheck2, MessageSquareText, Network } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { mediaUrl } from "../lib/media";
import { externalLinks } from "../lib/site-data";

const features = [
  { icon: MessageSquareText, index: "01", title: "自然语言交互", text: "直接描述目标、约束和业务背景。YiGraph 理解分析意图，将复杂问题拆解为可执行的图分析任务。", tags: ["意图理解", "多轮交互", "任务规划"] },
  { icon: Database, index: "02", title: "多源数据构图", text: "连接结构化与非结构化数据，自动识别实体、关系和属性，缩短从原始数据到可分析图结构的路径。", tags: ["数据接入", "实体识别", "关系抽取"] },
  { icon: Network, index: "03", title: "智能图分析", text: "由大语言模型选择并编排确定性图算法，在保持自然交互的同时，确保分析结果准确、稳定、可复现。", tags: ["算法编排", "图计算", "结果校验"] },
  { icon: FileCheck2, index: "04", title: "可追溯报告", text: "自动汇总数据来源、推理步骤、算法参数与结果证据，生成面向业务沟通的结构化分析报告。", tags: ["证据链", "过程记录", "自动报告"] },
  { icon: BarChart3, index: "05", title: "可视化呈现", text: "将复杂图结构转化为清晰、可交互的关系视图，帮助分析人员定位关键节点、群组和传播路径。", tags: ["关系视图", "交互探索", "洞察表达"] },
];

const featureScreens = [
  { file: "finance-query.webp", caption: "自然语言分析会话 · 产品界面" },
  { file: "dataset-management.webp", caption: "数据集管理 · 操作录屏截图" },
  { file: "finance-workflow.webp", caption: "DAG 分析流程 · 产品界面" },
  { file: "finance-report.webp", caption: "资金流分析报告 · 产品界面" },
  { file: "algorithm-graph.webp", caption: "关系图探索 · 操作录屏截图" },
];

export function ProductPage() {
  return <>
    <PageHero eyebrow="PRODUCT CAPABILITIES" title="把图分析的复杂度，留给系统" description="从问题理解到结论呈现，YiGraph 为每一个分析环节提供连贯、可验证的能力支持。">
      <div className="hero-code-panel"><div className="code-head"><span /><span /><span /><small>analysis.plan</small></div><code><i>01</i> parse_intent(question)<br /><i>02</i> build_graph(sources)<br /><i>03</i> run_algorithm(plan)<br /><i>04</i> verify_and_report()</code></div>
    </PageHero>

    <section className="section feature-list"><div className="container">
      {features.map(({ index, title, text, tags }, position) => <article className={position % 2 ? "feature-row reverse" : "feature-row"} key={title}><figure className="product-screen"><a href={mediaUrl(featureScreens[position].file)} target="_blank" rel="noreferrer" aria-label={`查看大图：${title}`}><img src={mediaUrl(featureScreens[position].file)} alt={`${title}：${featureScreens[position].caption}`} loading="lazy" /></a><figcaption>{featureScreens[position].caption}<span>点击查看大图</span></figcaption></figure><div className="feature-copy"><span className="eyebrow">CAPABILITY {index}</span><h2>{title}</h2><p>{text}</p><div className="tag-list">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}
    </div></section>

    <section className="section comparison"><div className="container"><div className="section-heading"><span className="eyebrow">WHY YIGRAPH</span><h2>更贴近业务的图智能分析流程</h2></div><div className="comparison-table"><div className="comparison-row head"><span>分析环节</span><span>传统图分析</span><span>YiGraph</span></div>{[["使用门槛","需要掌握查询语言与图算法","以自然语言描述业务问题"],["工作流程","多个工具之间手工切换","构图、分析、报告一体化"],["结果解释","依赖分析人员二次整理","自动记录步骤与证据链"],["算法可靠性","专业能力强但业务理解有限","LLM 理解 + 确定性算法执行"]].map((row) => <div className="comparison-row" key={row[0]}>{row.map((cell, index) => <span className={index === 2 ? "highlight" : ""} key={cell}>{index === 2 && <i>✓</i>}{cell}</span>)}</div>)}</div></div></section>

    <section className="bottom-cta"><div className="container"><div><span className="eyebrow">NEXT STEP</span><h2>看看 YiGraph 如何解决真实行业问题</h2></div><div><Link className="button button-primary" to="/cases">查看行业案例 <ArrowRight size={18} /></Link><a className="button button-secondary" href={externalLinks.github} target="_blank" rel="noreferrer">访问 GitHub</a></div></div></section>
  </>;
}
