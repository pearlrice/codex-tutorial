# Codex 全方位教程 — 项目规划文档

## 项目目标
为小白用户创建一份完整的、图文并茂的 OpenAI Codex 使用教程，参考 Notion 笔记风格，分步骤、配图片，覆盖从安装到高级功能的全部内容。

## 目标读者
- 零基础用户，可能从未使用过 AI 编程工具
- 了解 ChatGPT 网页版，但不清楚 Codex 的区别
- 想要系统学习 Codex 全部功能

## 资料来源
- OpenAI Codex 官方文档: https://developers.openai.com/codex/quickstart
- 官方 Skills 文档、概念文档、配置文档等

---

## 教程大纲

### 第一部分：认识 Codex（概念篇）
1.1 Codex 是什么 — AI 编程 agent 的定义
1.2 Codex 四种形态对比 — App / CLI / IDE / Cloud
1.3 Codex vs ChatGPT 网页版 — 核心区别对照表
1.4 名词解释 — Agent、Skill、MCP、Subagent、Sandbox、Worktree 等

### 第二部分：安装与登录（实操篇）
2.1 Codex App 安装（Windows / macOS）
2.2 Codex CLI 安装（npm / Homebrew）
2.3 IDE 扩展安装（VS Code / Cursor / Windsurf）
2.4 Cloud 浏览器版访问
2.5 登录认证 — ChatGPT 账号 vs API Key

### 第三部分：第一次使用（入门篇）
3.1 打开 Codex App — 界面导览
3.2 选择项目文件夹
3.3 发送第一条消息
3.4 理解 Local 模式 vs Cloud 模式
3.5 Git 检查点 — 安全回滚机制

### 第四部分：基本功能详解（功能篇）
4.1 Agent 模式 — 读文件、跑命令、写代码
4.2 对话管理 — 新建/切换/删除对话
4.3 文件操作 — 创建、编辑、搜索、整理
4.4 代码审查与 Diff 视图
4.5 终端命令执行
4.6 自动化任务与后台运行

### 第五部分：Skill 技能系统（进阶篇）
5.1 什么是 Skill — 可复用的工作流封装
5.2 内置 Skill 介绍（plan、skill-creator 等）
5.3 如何安装第三方 Skill（$skill-installer）
5.4 如何创建自定义 Skill
5.5 Skill 的目录结构与作用域
5.6 Skill vs Plugin 的区别

### 第六部分：Codex 核心能力实战（实战篇）
6.1 整理与重构代码文件
6.2 设计绘图（架构图、流程图、思维导图）
6.3 创建 PPT 演示文稿
6.4 Debug 与 Bug 修复
6.5 代码现代化改造
6.6 创建 PR 与代码审查

### 第七部分：定制化配置（配置篇）
7.1 AGENTS.md — 项目级持久化指令
7.2 Memories 记忆系统
7.3 MCP 外部工具集成
7.4 Subagent 子代理系统
7.5 config.toml 配置文件
7.6 Hooks 钩子系统

### 第八部分：最佳实践与技巧（总结篇）
8.1 提示词技巧（Prompting Guide）
8.2 团队协作最佳实践
8.3 安全注意事项
8.4 常见问题排查

---

## 文件结构
```
codex_tut2/
├── CLAUDE.md                    # 本规划文档
├── README.md                    # 教程首页（目录索引）
├── chapters/
│   ├── 01-what-is-codex.md      # 认识 Codex
│   ├── 02-installation.md       # 安装与登录
│   ├── 03-first-use.md          # 第一次使用
│   ├── 04-basic-features.md     # 基本功能详解
│   ├── 05-skills.md             # Skill 技能系统
│   ├── 06-practical-capabilities.md  # 核心能力实战
│   ├── 07-customization.md      # 定制化配置
│   └── 08-best-practices.md     # 最佳实践
└── assets/
    └── diagrams/                # Mermaid 图表源文件
```

## 图片策略
- 使用 Mermaid 图表绘制架构图、流程图、对比图
- 使用 ASCII art 展示终端界面效果
- 使用表格进行功能对比
- 标注 `[截图位置]` 提示用户在实际操作中截图的位置

## 写作风格
- 口语化、友好、面向零基础用户
- 每个操作步骤配图或配表
- 关键名词首次出现时加粗并解释
- 使用 Notion 风格的信息框（💡 提示、⚠️ 注意、✅ 完成）

---

## 完成状态

✅ **全部 8 章已完成** (2026-04-24)

| 章节 | 文件 | 状态 |
|------|------|:--:|
| 认识 Codex | chapters/01-what-is-codex.md | ✅ |
| 安装与登录 | chapters/02-installation.md | ✅ |
| 第一次使用 | chapters/03-first-use.md | ✅ |
| 基本功能详解 | chapters/04-basic-features.md | ✅ |
| Skill 技能系统 | chapters/05-skills.md | ✅ |
| 核心能力实战 | chapters/06-practical-capabilities.md | ✅ |
| 定制化配置 | chapters/07-customization.md | ✅ |
| 最佳实践与技巧 | chapters/08-best-practices.md | ✅ |

### 待完善（可选）
- [ ] 实际运行 Codex 并截取真实截图替换 [截图位置] 标注
- [ ] 将 Mermaid 图表导出为独立图片文件
- [ ] 根据 Codex 版本更新调整内容
