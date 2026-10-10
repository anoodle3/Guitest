import { ArrowRight, BookOpen, Github, Mail, MessageSquare } from "lucide-react";
import { FormEvent } from "react";
import { PageHero } from "../components/PageHero";
import { externalLinks } from "../lib/site-data";

export function ContactPage() {
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `YiGraph 咨询 — ${data.get("name")}`;
    const body = `姓名：${data.get("name")}\n邮箱：${data.get("email")}\n单位：${data.get("organization")}\n\n${data.get("message")}`;
    window.location.href = `mailto:superchency@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  return <>
    <PageHero eyebrow="CONTACT US" title="聊聊你的图数据分析问题" description="无论是产品使用、研究交流还是行业合作，都可以通过这里与 YiGraph 团队建立联系。" />
    <section className="section contact-section"><div className="container contact-grid"><div className="contact-info"><span className="eyebrow">GET IN TOUCH</span><h2>从一个具体问题开始</h2><p>告诉我们你的数据类型、分析目标或当前遇到的难点。团队将根据你的信息评估合适的交流方式。</p><a className="contact-method" href="mailto:superchency@gmail.com"><div><Mail size={21}/></div><span><small>实验室邮箱</small><strong>superchency@gmail.com</strong></span><ArrowRight size={18}/></a><a className="contact-method" href={externalLinks.github + "/issues"} target="_blank" rel="noreferrer"><div><Github size={21}/></div><span><small>问题与建议</small><strong>GitHub Issues</strong></span><ArrowRight size={18}/></a><a className="contact-method" href={externalLinks.docs} target="_blank" rel="noreferrer"><div><BookOpen size={21}/></div><span><small>使用反馈</small><strong>用户手册</strong></span><ArrowRight size={18}/></a></div>
      <div className="contact-form-wrap"><form className="contact-form" onSubmit={submit}><div className="form-head"><MessageSquare size={24}/><div><h2>邮件联系</h2><p>填写后打开你的邮件客户端，确认内容后发送。</p></div></div><label>姓名<input name="name" required placeholder="怎么称呼你" /></label><label>邮箱<input name="email" required type="email" placeholder="name@example.com" /></label><label>单位<input name="organization" placeholder="公司 / 高校 / 研究机构" /></label><label>留言内容<textarea name="message" required rows={5} placeholder="请简要描述你的需求或问题" /></label><div className="form-footer"><small>网站不会保存表单。若未打开邮件客户端，请直接发送到 superchency@gmail.com。</small><button className="button button-primary" type="submit">打开邮件草稿 <ArrowRight size={17}/></button></div></form></div>
    </div></section>
  </>;
}
