# 项目文档

## 项目概述

名称: backend

这是一个使用 Vite + Vue 3 开发的前端管理后台项目，采用 TypeScript、Pinia 做状态管理、Element Plus 作为 UI 组件库，并使用 ECharts 展示图表。

主要技术栈：

- Vue 3 (组合式 API)
- Vite
- TypeScript
- Pinia
- Element Plus
- ECharts
- Sass

## 环境与依赖

- Node: 推荐使用 `^20.19.0` 或 `>=22.12.0`（见 `package.json` 的 `engines` 字段）
- 安装依赖：

```bash
npm install
```

常用脚本（在 `package.json` 中）：

- `npm run dev`：本地开发（启动 Vite）
- `npm run build`：构建（含类型检查）
- `npm run build-only`：仅执行 Vite 打包
- `npm run preview`：构建后预览
- `npm run type-check`：运行 `vue-tsc --build`
- `npm run lint`：运行 ESLint 并尝试修复
- `npm run format`：使用 Prettier 格式化 `src/`

## 项目结构（重要文件说明）

- `index.html`：Vite 入口页面
- `vite.config.ts`：Vite 配置（自动导入、ElementPlus 组件解析、别名 `@` 指向 `src`）
- `tsconfig.*.json`：TypeScript 配置
- `src/main.ts`：应用入口，挂载 Pinia 与 Router
- `src/App.vue`：根组件，渲染 `Layout`
- `src/router/index.ts`：路由配置，包含 `/login` 与 `/index`（带子路由）
- `src/stores/`：Pinia 状态管理
  - `userInfo/userInfo.ts`：存储用户信息（`userId`, `username`, `password`）
- `src/views/`：页面视图
  - `login/loginView.vue`：登录页面（提交后跳转到 `index`）
  - `index/indexView.vue`：主应用布局页面，包含侧边栏与内容区
  - `index/PascalCase/PascalCase.vue`：仪表盘示例，包含多个卡片与图表组件
  - `index/UserManagement/UserManagement.vue`：用户管理页面（占位）
  - `layout/layout.vue`：布局外壳，渲染路由视图
- `src/components/`：可复用组件
  - `AuditPassRate/AuditPassRate.vue`：使用 ECharts 绘制审核通过率的横向堆叠柱状图
  - `category/categoryItem.vue`：使用 ECharts 绘制折线（趋势图）
  - `card/cardItem.vue`：信息卡片组件（metric 卡）
  - `menu/menuItem.vue`：侧边导航，使用 Element Plus 菜单与图标
- `src/assets/css/base.css`：基础样式（html/body/#app 高度与 margin 清理）
- `public/`：静态资源（如 `favicon.ico`）

配置与格式化相关：

- `.prettierrc.json`：Prettier 配置
- `eslint.config.ts`：ESLint 配置（含 Vue + TS）

## 路由与鉴权

- 路由在 `src/router/index.ts` 定义：
  - 根路径 `/` 重定向到 `/login`
  - `/login` 为登录页
  - `/index` 为主页面，带 `requiresAuth: true` 的 meta（示例中路由守卫被注释，可按需打开并实现 token 检查）

## 组件说明（快速）

- `AuditPassRate`：初始化 ECharts 实例并在 `onMounted` 中设置配置，监听窗口 `resize` 调整图表大小，`onUnmounted` 时销毁实例。
- `categoryItem`：折线图，配置有 tooltip、图例、grid、x/y 轴与两条折线数据，响应式 resize 处理。
- `cardItem`：基于 `el-card` 的小信息卡片，支持插槽 `title/content/footer`。
- `menuItem`：侧边栏菜单，包含 `pascalCase`（仪表盘）和 `userManagement`（用户管理）入口。

## 开发说明

1. 安装依赖：`npm install`
2. 本地开发：`npm run dev`，访问 `http://localhost:5173/`（默认端口由 Vite 决定）
3. 构建：`npm run build`（包含类型检查）
4. 预览构建产物：`npm run preview`
5. 代码风格：`npm run lint` 和 `npm run format`

注意：项目使用 `unplugin-auto-import` 与 `unplugin-vue-components` 自动导入 Element Plus，`vite.config.ts` 中已启用解析器。
