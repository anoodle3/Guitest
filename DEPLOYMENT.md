# GitHub Pages 发布

用户已于 2026-10-08 授权素材可用即部署。2026-10-09 更新版包含六段视频、金融、电信、工业制造和纪检核查演示，以及七篇公众号原文入口。

## 本地构建

使用 Node.js 22、pnpm 11.25.0：

```sh
pnpm install --frozen-lockfile
pnpm build
pnpm preview
```

构建产物位于 `dist/`，需通过 HTTP 服务预览。

## 发布方式

main 分支保存网站源码，gh-pages 分支仅保存已经验证的 `dist/` 静态网站。

仓库管理员进入 **Settings → Pages → Build and deployment**：

- Source：**Deploy from a branch**
- Branch：**gh-pages**
- 目录：**/(root)**

本试部署仓库为 `anoodle3/yigraph`，使用 GitHub Pages 的标准分支发布方式；不需要自定义 Actions 工作流。
用户已授权将试部署仓库设为公开。Pages 已启用，发布分支为 `gh-pages`，目录为 `/(root)`。

启用 Pages 后，GitHub 会从 gh-pages 分支构建并发布；不需要创建自定义 Actions 工作流。

无自定义域名时，预期网址为：

```text
https://anoodle3.github.io/yigraph/
https://anoodle3.github.io/yigraph/#/cases
```

页面使用 hash 路由，适配静态托管，刷新子页面无需后端路由。资源使用相对路径，适配仓库子目录。
公开页面默认隐藏设备预览工具栏；设备审核模式使用 `?preview=1#/cases`。

## 素材维护

视频和图片位于 `public/media/`；元数据位于 `src/lib/media.ts`。
当前视频库包括两条金融分析录屏、电信运维、工业故障诊断、纪检核查和新版英文产品演示。案例图册有 17 张图片；电信案例同时提供录屏和样例报告。
新增视频时提供类别、标题、简介、MP4 文件、封面和时长。站内 URL 通过 `mediaUrl` 生成，避免使用指向域名根目录的 `/media/...`。

联系页通过 `mailto:` 打开访问者的邮件客户端，不会保存表单或自动发送邮件。地址沿用原站配置的 `idc@neu.edu.cn`，当前素材未提供其他收件地址。

更新发布分支前，应重新构建并验证网站。发布仅包含构建产物，不包含原始文档、开发依赖或本地凭据。
