# 设计规范（design.md）

> 本文件是本站（EnshGuide / Enshrouded Wiki）UI 的唯一规范。所有新页面动手前必须先读本文件；
> 风格有任何调整，同步更新本文件。
>
> 来源：2026-11-05 风格融合批——以 [fumadocs.dev](https://www.fumadocs.dev/)（实测提取其 CSS
> 计算值与组件形态）为结构骨架，融合 Enshrouded 游戏本身的视觉母题（余烬火光 / Shroud 夜空 /
> Ancient 骨白刻石 / 火漆羊皮纸）。电影感首页的专属深色影院带沿用 `--cinema-*` 令牌，见 §5。

## 0. 融合映射（游戏特色 ← fumadocs 语汇）

| Enshrouded 母题 | fumadocs 语汇 | 本站落地 |
|---|---|---|
| Shroud 夜空（暖黑、飘灰烬） | 暖近黑画布 `#0d0d0c` + 骨白文字 | dark 模式全局面 |
| 余烬火光（hue 22 橙） | 橙强调 `#ff7a33` | `--brand-light` / `--brand-text`（dark） |
| Ancient 骨白金 | 米黄 CTA `#fff383` | `--cinema-paper` 按钮 / hover 高光 |
| 火漆羊皮纸 | 干净 docs 底 | light 模式暖纸底（非冷灰白） |
| 刻石铭文（等宽铭牌感） | Geist Pixel 标签 + JetBrains Mono | 全站 meta 标签走 `font-mono` 眉标 |
| 影院带（首页专属） | landing 直角锐利 + docs 圆角柔和的双轨 | 影院带直角系，docs 圆角 10px |

## 1. 配色

| 用途 | 亮色模式 | 暗色模式 | 说明 |
|---|---|---|---|
| 页面背景 | `hsl(40 33% 98%)` ≈ #fbfaf7 暖纸 | `hsl(30 6% 5%)` ≈ #0d0d0c 暖近黑 | 取自 fumadocs 实测体色，暖化 |
| 卡片背景 | `#ffffff` | `hsl(30 5% 7%)` ≈ #141312 | 文章页整页内容卡 |
| 文字（主） | `hsl(24 10% 10%)` 暖墨 | `hsl(45 30% 90%)` ≈ #ece7da 骨白 | Ancient 骨白刻石 |
| 文字（次要） | `hsl(25 6% 40%)` | `hsl(38 7% 63%)` | |
| 边框（发丝） | `hsl(40 14% 87%)` | `hsl(33 6% 16%)` | 亮/暗都走低饱和暖灰 |
| 品牌色（链接/强调） | `hsl(22 76% 43%)` #c2571b | `hsl(22 95% 52%)` | hue 22 余烬，AA 达标 |
| 品牌亮（装饰/active） | `hsl(22 76% 53%)` | `hsl(22 100% 60%)` = #ff7a33 | fumadocs 橙实测值 |
| 品牌文字安全档 | `hsl(22 76% 40%)` | `hsl(22 100% 62%)` | 暗色对 #0d0d0c ≈ 7:1 |
| 影院带 | 主题无关 | `--cinema-bg: 30 9% 4%` / `--cinema-paper: 45 33% 90%` / `--cinema-ink: 26 15% 8%` | 首页 Hero/预告带/结尾 CTA 专用 |

规则：组件里一律引用 token（`var(--brand)` / Tailwind 语义色 `bg-card` `text-muted-foreground`），
禁止硬编码 hex/rgba；warn/danger 语义色（amber/red）是唯一例外。

## 2. 字体

| 层级 | 字体 | 字号 | 字重 | 其他 |
|---|---|---|---|---|
| 首页 Hero 大标题 | Cormorant Garamond（自托管，见 `src/assets/fonts/`） | clamp(3.5rem→7.4rem) | 500 | 全大写、tracking 0.045em |
| 文章 H1 | Cormorant Garamond | text-4xl→5xl | 500 | tracking-tight |
| 区块 H2（首页） | Cormorant Garamond | text-3xl→[2.6rem] | 500 | tracking-tight |
| 正文 H2/H3（prose） | 系统 sans | prose 默认 | 700/600 | letter-spacing −0.015em |
| 正文 | 系统 sans | text-base/lg | 400 | prose-lg |
| 眉标/铭牌/meta | 系统 mono 栈（ui-monospace） | 10–12px | 600 | uppercase、tracking 0.2em–0.3em（`.cinema-eyebrow`） |
| 代码 | ui-monospace 栈 | 0.875em | 500 | 圆角 6px + 边框 + muted 底；pre 加边框圆角 12px |

## 3. 间距

| 场景 | 值 |
|---|---|
| 页面内容列 | 文章卡 `p-5 / md:p-8 / lg:p-10` |
| 区块（`.section`） | `py-12 md:py-16`，max-w-7xl |
| 卡片网格间距 | gap-5（卡）/ gap-10（双栏区） |
| 区块内小间距 | mt-2 / mt-3 / mt-4 刻度 |
| 标题-内容距 | 区块头下 mt-8 / mt-10 |

## 4. 组件样式

| 组件 | 圆角 | 边框 | 其他 |
|---|---|---|---|
| 全局半径 | `--radius: 0.625rem`（10px） | — | 影院带例外用 rounded-sm |
| 文章内容卡 | rounded-xl（12px） | 1px 发丝边框 + bg-card | 整页阅读面（fumadocs 内容卡模式） |
| 卡片 `.card` | rounded-lg | 1px 发丝边框 | hover: border 品牌色 60% + shadow-md |
| Callout | rounded-lg | 1px 淡边 + **2px 左轨强调色** + 6% 底色 | info/tip=余烬橙，warn=amber，danger=red |
| TOC（桌面/移动） | rounded-lg 卡 | 1px 边框 | 「On this page」mono 眉标；active 项 = 品牌色 10% 底药丸 |
| 侧栏（WikiSidebar） | 分组头 mono 眉标 | 左轨 border-l | active 项：左轨品牌色 + 加粗；hover:bg-muted |
| 主按钮 `.btn-primary` | rounded-md | 无边框 | 实底品牌深档 + 白字 |
| 影院带按钮 | rounded-full | 无边框 / 1px 白 25% | 纸色底 + 墨字（CTA）/幽灵描边（次级） |
| 面包屑/meta 行 | — | — | `font-mono uppercase tracking-wider` 12px |
| FAQ 折叠 | rounded-lg | 1px 边框 | summary 加 chevron 旋转 |
| 标签 chips | rounded-full | — | muted 底，hover 品牌色 15% |

## 5. 双轨制（重要）

- **docs 轨（阅读面）**：列表页、文章页、标签页、recent —— 暖纸/暖黑主题面 + 圆角 + 内容卡。
- **cinema 轨（首页专属）**：Hero / 预告带 / 结尾 CTA —— 直角、锐利、主题无关深色
  （`--cinema-*`）、胶片颗粒 + 暗角 + Cormorant 海报字。两轨通过余烬橙与骨白 CTA 呼应。
- 移动端断点：卡片网格 1 列 → sm:2 列 → lg:4 列；375px 禁止横向溢出（验收硬指标）。

## 6. 持久规则

1. 新页面动手前先读本文件；改风格先改本文件再动代码。
2. 只换视觉皮肤时优先改全局 token（globals.css 的 CSS 变量），不逐元素硬编码。
3. 玩具级演示可以偏离，上线页面必须遵守；例外（如语义色）须在本文件登记。
