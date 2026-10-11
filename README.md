# Human Atlas 3D · 中文汉化版

交互式 3D 人体解剖图谱(简体中文版),基于 [ashemag/human-atlas](https://github.com/ashemag/human-atlas) 与 **BodyParts3D** 成年男性参考解剖数据:2,234 个可独立选择的网格、15 个解剖系统、3,432 个命名概念,约 228 万三角形(压缩后约 33 MB)。

## 汉化版新增内容

在原项目基础上,本仓库做了完整的简体中文本地化:

- **全界面汉化**:标题、15 个系统面板、视图控制、分解视图滑杆、加载/错误提示、关于页、详情面板全部中文化,页面语言声明为 `zh-CN`,字体栈适配 PingFang SC / Microsoft YaHei。
- **3,432 个解剖名词全部译为中文**:按中国解剖学会《人体解剖学名词》风格生成完整中英词典(`app/zh-names.ts`),涵盖血管分支、骨骼亚区、牙齿等全部 FMA 术语;搜索结果以中文为主行、英文原名对照副行显示。
- **中文搜索**:中英文关键词同时匹配,内置口语别名映射(心脏→心、肝脏→肝、肾脏→肾、食道→食管、大脑→端脑等),兼顾标准术语与日常说法。
- **334 条结构专属中文介绍**(`app/explanations-zh.ts`):95 个主要结构(主要骨骼、内脏、脑区、大血管、眼/耳结构)+ 全部 249 个肌肉概念(整肌 + 肌的部分),按"位置形态 + 功能"风格撰写;左右侧概念共享同一介绍。无专属介绍的结构会明确标注"以上为所在系统的概述"。
- **3D 悬浮提示、点击详情、包含结构列表**均显示标准中文名。

> 说明:中文术语与介绍为机器辅助翻译/撰写,整体经过批量质检(命名顺序统一、叠字修复、覆盖率校验),如用于正式教学场景建议由解剖学专业人士审校。

## 运行

需要 Node.js ≥ 22.13,无需 API key 或账号:

```sh
npm ci
npm run dev    # http://localhost:3016
npm run build  # 静态产物输出到 dist/
```

校验:`npm run check`、`node scripts/validate-atlas.mjs`、`node scripts/validate-interactions.mjs`。

## 功能

- 直接在人体上旋转、缩放、点选结构
- 按系统开关图层,或使用"骨骼 / 内脏"预设
- 从整体解剖过渡到每个部件的分解全览
- 搜索解剖名称与源数据编号(支持中文/英文)
- 隔离选中结构并阅读详情
- 移动端有紧凑控件与自适应面板

## 数据来源与许可

- 原项目:[ashemag/human-atlas](https://github.com/ashemag/human-atlas),应用代码采用 [MIT License](LICENSE)
- 解剖数据:**BodyParts3D 4.0**,© The Database Center for Life Science,采用 **CC BY 4.0** 国际许可协议授权;再分发时须保留署名,完整致谢与来源链接见 [ATTRIBUTION.md](public/ATTRIBUTION.md)
- 本图谱仅供教育参考,不可用于诊断或手术

## 实现要点

几何体按系统合并批次渲染;每结构的状态(位移/可见性/选中)由 GPU 纹理驱动,组件几何支持精确拾取;分解布局只打包可见部件;场景按需重绘,轨道控制在数千部件下依然流畅。可选的 WebMCP 工具向兼容浏览器暴露搜索与查看能力,不依赖它界面也完整可用。

重建几何体是可选流程:获取官方 BodyParts3D OBJ 压缩包与英文元数据表,依次运行 `scripts/convert-anatomy.py`、`node scripts/optimize-anatomy.mjs`、`node scripts/compress-models.mjs`。

## 部署

可将本仓库作为 Vite 项目导入 Vercel(自带 `vercel.json`),也可由任意静态服务器托管 `dist/`。

## License

Original application code is released under the [MIT License](LICENSE). **The anatomy data has its own CC BY 4.0 license**; preserve the attribution when redistributing it. The Chinese localization content (terminology dictionary and explanations) in this repository is provided under the same licenses.
