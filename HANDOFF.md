# Enshrouded 1.0 指导站 — 项目简报(HANDOFF)

> 状态:**已拍板(2026-10-17)并上线**。依据:Enshrouded 候选评估工作流(78/100,判定翻案报告)。

## 0. 已上线(2026-10-17)

- **线上地址**:https://wenta0v0-dot.github.io/enshrouded-guide/
- **GitHub 仓库**:https://github.com/wenta0v0-dot/enshrouded-guide(公开仓,GitHub Pages「deploy from branch」)
- **技术栈**:AnvilWiki 模板(Astro 7 + MDX + Pagefind),主题色余烬橙 #C2571B,`apply-template` 预设 2(指南型首页)
- **发布流程**:`node scripts/ship.mjs`(构建 + dist 镜像到仓库根)→ `git add -A && git commit && git push`

## 1. 站点定位(来自评估报告的打法)

**「1.0 深度攻略站」而非泛 wiki**。官方 wiki.gg(4,258 篇)锁死泛 wiki 与头部词,但 1.0(10-15 上线)的新内容 hub 页缺失(Cinder's Cradle / Sparkworks 均 missing,API 实证)、活跃编辑仅 14 人。窗口 2-6 周:HtM 48h 内已发 7 篇 1.0 构筑文,补位以天计。

## 2. v1 内容(四页)

1. `guides/beginner-guide` — 1.0 后的新手路线(1.0 变更清单 + 三步路线)
2. `guides/tier-list` — 1.0 Builds 总览(已核验的原型:Dagger/Summoner/Staff/Greatsword/Healer/Warrior;9 新法术;eternal upgrades;点名 pindrop 停在 Update 8)
3. `guides/cinders-cradle` — 最终区域页(火山 endgame 区,50 级 cap,准备清单)
4. `guides/sparkworks` — 1.0 新系统缺口页(官方 wiki 无 hub,本页补位)

## 3. 已验证事实红线

- 1.0 于 2026-10-15 结束 EA(自 2024-01),等级上限 50,Cinder's Cradle 为地图最终区域(火山主题)
- 9 个新法术 + eternal upgrades 随 1.0 上线;建筑系统大改;新存档格式(EA 存档可迁移)
- Sparkworks 为 1.0 新系统,绑定 endgame 进程(细节机制**未经游戏内核验**)
- CCU 42,407(1.0 后第 2 天)/108,037 评测 85.9% 好评/30 天峰值 79,175(Steam API 实测)
- **红线**:Cinder's Cradle 深度走图、Sparkworks 数值细节、Flame 祭坛数字(changelog 自相矛盾 15 vs 16)必须游戏内核实后再写;EA 老攻略一律视为过时(建筑/存档已变)

## 4. 待办(按优先级)

1. **游戏内核验**:Sparkworks 机制细节、Cinder's Cradle 区域走图、per-archetype 构筑数值(需要玩家喂素材/截图)
2. Search Console 提交(用户 Google 账号)
3. ~~favicon/hero 图:换 Enshrouded 主题素材(现为模板默认)~~ → 首页 hero/卡片/结尾/OG 已换官方 1.0 预告片剧照(2026-10-24);favicon 仍为品牌生成,如需游戏图标可另换
4. 每次 Enshrouded 补丁后 24h 内复更四页(站点的差异化就是「 dated + 快」)
5. 三站矩阵:BreakEgg(更新事件流量)/ GK2(稳定大词)/ Enshrouded(1.0 深度窗口)——复更节奏各自独立

## 5. 内容更新记录

- **2026-10-24**:首页电影感改版——Hero / 4 张有序 QuickStart 卡 / ClosingCta 换成官方 1.0 Launch Trailer(`gp7PZXkyxxY`)高分辨率剧照,新增深色影院带预告片区、Cormorant Garamond 标题、电影颗粒/暗角/慢推镜与 1200×630 电影感 OG 图;参考同行补入 1.0 数据带(6 个已核验数字)、带来源链接的快捷问答与「How this wiki is dated」校验卡;`/about` 从模板默认的 bosses/items/codes/Discord 文案改为实际内容边界、校验方法与联系路径。剧照来源与时间码见 `src/assets/cinematic/CREDITS.md`。首页内嵌视频从 EA Gameplay Overview 换为 1.0 Launch Trailer。
- **2026-10-17 晚**:Sparkworks 页回填真实机制(逻辑系统:输入/输出/Switchbox/Sparkworks Tool/时钟与逻辑门,源自 Keen Games 官方公告 + enshrouded.world 社区指南,标注「UI 步骤待游戏内核验」);Cinder's Cradle 页回填走图事实(位置 beyond Veilwater Basin、Ancient Gate 入口在 Cromville 温泉与 Lake Luma 之间需 Flame 等级、双层结构、12 新 Shroud Roots、14 新敌型、主线终章、Flame Level 10,源自 The Nerd Stash/G2A/官方 changelog);首页与 Cinder's Cradle 页嵌入官方 Gameply Trailer(KF3tQ2Gnnvg,官方频道 @enshroudedgame);首页挂官方预告懒加载播放器。
- 仍待游戏内核验:Cinder's Cradle 双层走图细节/12 个 Shroud Root 具体位置/敌方部署;Sparkworks 的 UI 步骤与最优机构设计;Flame 祭坛数字(changelog 自相矛盾处)。
