> 此仓库为 [Wexond](https://github.com/wexond/desktop) 的汉化版本，原版请见链接
> 汉化版本下载地址：[最新](https://github.com/Tim-Paik/desktop/releases)

<p align="center">
  <a href="https://wexond.net"><img src="static/icons/icon.png" width="256"></a>
</p>

<div align="center">
  <h1>Wexond</h1>

[![Actions Status](https://github.com/wexond/desktop/workflows/Build/badge.svg)](https://github.com/wexond/desktop/actions)
[![Downloads](https://img.shields.io/github/downloads/wexond/desktop/total.svg?style=flat-square)](https://github.com/wexond/desktop/releases)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fwexond%2Fwexond.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fwexond%2Fwexond?ref=badge_shield)
[![PayPal](https://img.shields.io/badge/PayPal-Donate-brightgreen?style=flat-square)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VCPPFUAL4R6M6&source=url)
[![Discord](https://discordapp.com/api/guilds/307605794680209409/widget.png?style=shield)](https://discord.gg/P7Vn4VX)

Wexond是一个可扩展的，注重隐私的Web浏览器，具有完全不同的用户体验，基于`Electron`和`React`。 它旨在快速，私密，美观，可扩展和实用。

</div>

# 特点

- **Wexond 盾牌** - 浏览网络时没有任何广告，也不会让网站跟踪您。感谢 [Cliqz](https://github.com/cliqz-oss/adblocker)支持的Wexond Shield，网站的加载速度甚至提高了8倍！
- **没有Google服务，且使用资源使用率较低的Chromium** - 由于Wexond在覆盖层（仅基于几个也是最重要的Chromium组件）下使用了Electron，因此不会因多余的Google跟踪服务和其他服务而臃肿。
- **美丽而现代的用户界面UI**
- **快速流畅的用户界面UI** - 动画非常流畅，并且它们的时间安排完美平衡。
- **高度可定制的新标签页** - 自定义新标签页的几乎所有方面！
- **可自定义的浏览器用户界面** - 自由地选择Wexond应该具有紧凑的UI还是普通的UI。
- **标签组** - 轻松对标签进行分组。
- **可滚动的标签**
- **对Chrome扩展程序的部分支持** - 直接从Chrome网上应用店安装一些扩展程序\* (参见 [#110](https://github.com/wexond/wexond/issues/110)) (WIP)
- **配套** - 通过安装或开发自己的包和主题来扩展Wexond以满足您的需求\* ([#147](https://github.com/wexond/wexond/issues/147)) (WIP)

# 屏幕截图

![image](https://user-images.githubusercontent.com/49786711/90972426-7f57f480-e54b-11ea-9df3-d9bdeeb86e94.png)

UI 完整标题栏：
![image](https://user-images.githubusercontent.com/49786711/90972429-8b43b680-e54b-11ea-8dc3-629c7c556577.png)

UI 紧凑标题栏：
![image](https://user-images.githubusercontent.com/49786711/90972430-8c74e380-e54b-11ea-983b-d3497bbd27d7.png)
![image](https://user-images.githubusercontent.com/49786711/90972480-ef667a80-e54b-11ea-82ec-3be4736e42f5.png)

标签组：
![image](https://user-images.githubusercontent.com/49786711/90972431-8da61080-e54b-11ea-949c-cda1c532648c.png)

# 下载

## 汉化版本
- [最新](https://github.com/Tim-Paik/desktop/releases)

## 原版
- [Stable and beta versions](https://github.com/wexond/desktop/releases)
- [Nightlies](https://github.com/wexond/desktop-nightly/releases)

# [路线图](https://github.com/wexond/wexond/projects)

# 贡献

如果您发现任何错误，或有一些新想法，请随时发issue，我们欢迎任何建议。错误报告对我们真的很有帮助，非常感谢。 Wexond正在大量开发中，我们不保证其稳定。 另外，请不要犹豫，发个Pull request吧！ 这对于我们以及该项目的进一步发展非常重要。

## 启动

在运行Wexond之前，请确保您已经安装 **最新版本的** [`Node.js`](https://nodejs.org/en/) 和 [`Yarn`](https://classic.yarnpkg.com/en/docs/install/#windows-stable)

在Windows上运行时，请确保已安装了构建工具。 您可以通过以**管理员身份**运行以下命令来安装它们：

```bash
$ npm i -g windows-build-tools
```

首先，运行此命令以安装所有需要的依赖项。 如果您遇到任何问题，请报告。

```bash
$ yarn
```

成功安装后，需要使用Electron headers重建本机模块。 为此，请运行：

```bash
$ npm run rebuild
```

下面给定的命令将在开发模式下运行Wexond。

```bash
$ npm run dev
```

# 文档

指南和API参考位于 [`docs`](docs) 目录中。

### 赞助商

[![Sponsors](https://opencollective.com/wexond/tiers/sponsor.svg?avatarHeight=48)](https://opencollective.com/wexond)

### 支持者

[![Backers](https://opencollective.com/wexond/tiers/backer.svg?avatarHeight=48)](https://opencollective.com/wexond)

## 许可证

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fwexond%2Fwexond.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fwexond%2Fwexond?ref=badge_large)

# FAQ

## 为什么使用Electron?

由于Wexond使用Electron，它受到了许多误解，例如被说是在浏览器里做的浏览器。某种程度上这没错，但是从技术上讲这并不重要（还请记住，即使是Firefox这样的浏览器，UI也有很多是用Web完成）。它并不会让浏览器变缓慢或臃肿。 相反，与Chrome相比，Wexond的占用更小。选择Electron是做个浏览器的最佳选择。我们完全可以根据需要定制UI。我们并没有足够的服务器资源来等Chromium编译数周，也无法编辑将近2500万行的代码，光找个负责更改按钮图标的代码大概就够几周了。因此，我们选了Electron，它仅使用了少数几个Chromium的组件就可以显示Web，而它完全没有Google服务之类的东西，这使它更加轻便。尽管它没有使用完整的Chromium内核，但这并不真正影响浏览器的功能。我们可以实现除了Google服务外所有的Chromium功能。
