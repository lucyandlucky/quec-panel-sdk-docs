import{_ as a,o as n,c as e,al as t}from"./chunks/framework.GnR-YWkE.js";const g=JSON.parse('{"title":"面板工程目录结构说明","description":"","frontmatter":{},"headers":[],"relativePath":"panel/directory.md","filePath":"zh-CN/panel/directory.md","lastUpdated":1771941015000}'),p={name:"panel/directory.md"};function i(l,s,d,c,o,r){return n(),e("div",null,[...s[0]||(s[0]=[t(`<h1 id="面板工程目录结构说明" tabindex="-1">面板工程目录结构说明 <a class="header-anchor" href="#面板工程目录结构说明" aria-label="Permalink to “面板工程目录结构说明”">​</a></h1><p>本文档基于 <code>quec-panel-template</code> 模板工程（v2.0），详细说明面板工程的完整目录结构及各文件的用途。</p><h2 id="技术栈概览" tabindex="-1">技术栈概览 <a class="header-anchor" href="#技术栈概览" aria-label="Permalink to “技术栈概览”">​</a></h2><table tabindex="0"><thead><tr><th>技术</th><th>版本</th></tr></thead><tbody><tr><td>React Native</td><td>0.81.1</td></tr><tr><td>React</td><td>19.1.0</td></tr><tr><td>TypeScript</td><td>5.9.3</td></tr><tr><td>状态管理</td><td>Zustand 5.0.8</td></tr><tr><td>导航</td><td>React Navigation 7.x</td></tr><tr><td>国际化</td><td>i18n-js 4.x</td></tr></tbody></table><h2 id="顶层目录结构" tabindex="-1">顶层目录结构 <a class="header-anchor" href="#顶层目录结构" aria-label="Permalink to “顶层目录结构”">​</a></h2><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>quec-panel-template/</span></span>
<span class="line"><span>├── .configs/                    # 项目配置文件</span></span>
<span class="line"><span>├── .vscode/                     # VS Code 编辑器配置</span></span>
<span class="line"><span>├── __tests__/                   # 单元测试目录</span></span>
<span class="line"><span>├── READMES/                     # 开发指引文档集合</span></span>
<span class="line"><span>├── scripts/                     # 自动化脚本</span></span>
<span class="line"><span>├── src/                         # 源代码目录（核心）</span></span>
<span class="line"><span>├── temp/                        # 临时文件目录（构建产物等）</span></span>
<span class="line"><span>├── .buckconfig                  # Buck 构建工具配置</span></span>
<span class="line"><span>├── .eslintignore                # ESLint 忽略规则</span></span>
<span class="line"><span>├── .flowconfig                  # Flow 类型检查配置</span></span>
<span class="line"><span>├── .gitignore                   # Git 忽略文件</span></span>
<span class="line"><span>├── .npmrc                       # npm 源配置</span></span>
<span class="line"><span>├── .watchmanconfig              # Watchman 文件监听配置</span></span>
<span class="line"><span>├── babel.config.js              # Babel 编译配置</span></span>
<span class="line"><span>├── eslint.config.mjs            # ESLint 代码规范配置（Flat Config）</span></span>
<span class="line"><span>├── index.js                     # 应用主入口文件（默认）</span></span>
<span class="line"><span>├── index.android.js             # Android 平台入口</span></span>
<span class="line"><span>├── index.ios.js                 # iOS 平台入口</span></span>
<span class="line"><span>├── metro.config.js              # Metro 打包器配置</span></span>
<span class="line"><span>├── package.json                 # 项目依赖与脚本配置</span></span>
<span class="line"><span>├── prettier.config.mjs          # Prettier 代码格式化配置</span></span>
<span class="line"><span>├── quec-dependencies.json       # 移远原生依赖声明</span></span>
<span class="line"><span>├── template.config.js           # 模板配置（占位符名称等）</span></span>
<span class="line"><span>├── tsconfig.json                # TypeScript 编译配置</span></span>
<span class="line"><span>└── yarn.lock                    # 依赖锁定文件</span></span></code></pre></div><h2 id="入口文件" tabindex="-1">入口文件 <a class="header-anchor" href="#入口文件" aria-label="Permalink to “入口文件”">​</a></h2><p><code>index.js</code> / <code>index.android.js</code> / <code>index.ios.js</code> 是应用的启动入口，主要做两件事：</p><ol><li>调用 <code>patchTextStyle()</code> 修补 Text 组件默认样式</li><li>使用 <code>AppRegistry.registerComponent</code> 注册根组件 <code>App</code></li></ol><h2 id="configs-—-项目配置" tabindex="-1"><code>.configs/</code> — 项目配置 <a class="header-anchor" href="#configs-—-项目配置" aria-label="Permalink to “.configs/ — 项目配置”">​</a></h2><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.configs/</span></span>
<span class="line"><span>├── app.json                     # 应用名称配置（appName）</span></span>
<span class="line"><span>├── jest.config.js               # Jest 测试框架配置</span></span>
<span class="line"><span>└── tsconfig.json                # 类型检查专用 TSConfig</span></span></code></pre></div><h2 id="scripts-—-自动化脚本" tabindex="-1"><code>scripts/</code> — 自动化脚本 <a class="header-anchor" href="#scripts-—-自动化脚本" aria-label="Permalink to “scripts/ — 自动化脚本”">​</a></h2><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>scripts/</span></span>
<span class="line"><span>├── build-panel.js               # 面板构建脚本（打包 iOS/Android bundle）</span></span>
<span class="line"><span>├── config.js                    # 构建配置（原生依赖映射表 &amp; 名称映射）</span></span>
<span class="line"><span>├── add-page-v2.js               # 一键添加新页面脚本</span></span>
<span class="line"><span>├── generate-model-types.js      # 根据物模型 JSON 自动生成 TypeScript 类型</span></span>
<span class="line"><span>└── gen-assets-types.mjs         # 根据静态资源自动生成资源类型映射</span></span></code></pre></div><h3 id="脚本详细说明" tabindex="-1">脚本详细说明 <a class="header-anchor" href="#脚本详细说明" aria-label="Permalink to “脚本详细说明”">​</a></h3><table tabindex="0"><thead><tr><th>脚本</th><th>运行命令</th><th>说明</th></tr></thead><tbody><tr><td><code>build-panel.js</code></td><td><code>yarn build:panel</code></td><td>交互式输入版本号，自动执行 RN bundle 打包，生成 iOS/Android 的 <code>.tar.gz</code> 产物包，包含依赖声明</td></tr><tr><td><code>add-page-v2.js</code></td><td><code>yarn addPage</code></td><td>交互式输入页面名和描述，自动创建页面文件、样式文件，并注册到路由配置中</td></tr><tr><td><code>generate-model-types.js</code></td><td><code>yarn getModelTypes</code></td><td>读取 <code>tsl-model-json-folder/</code> 下的物模型 JSON 文件，自动生成 <code>ModelsType</code> 类型定义和 <code>attr.config.ts</code></td></tr><tr><td><code>gen-assets-types.mjs</code></td><td><code>yarn gen:assets</code></td><td>扫描 <code>src/assets/</code> 目录，生成 <code>AssetsName</code> 类型和资源映射对象</td></tr></tbody></table><h2 id="src-—-源代码目录" tabindex="-1"><code>src/</code> — 源代码目录 <a class="header-anchor" href="#src-—-源代码目录" aria-label="Permalink to “src/ — 源代码目录”">​</a></h2><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>src/</span></span>
<span class="line"><span>├── App.tsx                      # 应用根组件</span></span>
<span class="line"><span>├── AppContainer.tsx             # 应用容器（初始化逻辑 &amp; 事件监听）</span></span>
<span class="line"><span>├── api/                         # 网络请求层</span></span>
<span class="line"><span>├── assets/                      # 静态资源</span></span>
<span class="line"><span>├── components/                  # 通用组件</span></span>
<span class="line"><span>├── config/                      # 项目配置常量</span></span>
<span class="line"><span>├── hooks/                       # 自定义 Hooks</span></span>
<span class="line"><span>├── i18n/                        # 国际化</span></span>
<span class="line"><span>├── page/                        # 页面文件</span></span>
<span class="line"><span>├── router/                      # 路由管理</span></span>
<span class="line"><span>├── store/                       # 状态管理（空目录，使用 SDK 提供的 Store）</span></span>
<span class="line"><span>├── style/                       # 全局样式</span></span>
<span class="line"><span>├── types/                       # 类型定义</span></span>
<span class="line"><span>└── util/                        # 工具函数</span></span></code></pre></div><h3 id="app-tsx-—-应用根组件" tabindex="-1"><code>App.tsx</code> — 应用根组件 <a class="header-anchor" href="#app-tsx-—-应用根组件" aria-label="Permalink to “App.tsx — 应用根组件”">​</a></h3><p>应用的顶层组件，职责包括：</p><ul><li>调用 <code>setupI18n()</code> 初始化多语言</li><li>调用 <code>setupNativeStyle()</code> 固定字体大小，不随系统缩放</li><li>调用 <code>createDpsModelStore(modelDefinition)</code> 创建设备物模型状态，并导出 <code>useDpsModel</code></li><li>调用 <code>createDeviceStore({})</code> 创建设备状态管理器</li><li>获取原生端当前显示模式（深色/浅色），通过 <code>ThemeProvider</code> 提供主题上下文</li></ul><h3 id="appcontainer-tsx-—-应用容器" tabindex="-1"><code>AppContainer.tsx</code> — 应用容器 <a class="header-anchor" href="#appcontainer-tsx-—-应用容器" aria-label="Permalink to “AppContainer.tsx — 应用容器”">​</a></h3><p>功能容器组件，职责包括：</p><ul><li>注册 <code>global.toast</code>、<code>global.loading</code>、<code>global.loadingDismiss</code> 等全局方法</li><li>使用 <code>useInitDpsModel()</code> 请求设备产品物模型</li><li>监听返回键、设备状态更新、物模型上行消息</li><li>向 <code>modelKitParamsManager</code> 和 <code>deviceKitParamsManager</code> 注册 loading/toast 回调</li><li>渲染结构为 <code>AppRouter</code> + <code>Toast</code> + <code>Loading</code></li></ul><hr><h3 id="src-api-—-网络请求层" tabindex="-1"><code>src/api/</code> — 网络请求层 <a class="header-anchor" href="#src-api-—-网络请求层" aria-label="Permalink to “src/api/ — 网络请求层”">​</a></h3><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>api/</span></span>
<span class="line"><span>├── constants.ts                 # 请求常量（区域 URL、请求方法枚举、请求头定义）</span></span>
<span class="line"><span>├── http-instance.ts             # HTTP 实例封装（SaaS &amp; PaaS 双实例）</span></span>
<span class="line"><span>├── index.ts                     # 导出入口</span></span>
<span class="line"><span>└── module/                      # 业务接口模块</span></span>
<span class="line"><span>    ├── demo.ts                  # 示例接口（SaaS GET/LIST、PaaS GET）</span></span>
<span class="line"><span>    └── index.ts                 # 模块导出</span></span></code></pre></div><p><code>http-instance.ts</code> 提供两种请求实例：</p><table tabindex="0"><thead><tr><th>实例</th><th>说明</th></tr></thead><tbody><tr><td><code>httpSaasInstance</code></td><td>SaaS 接口请求，自动根据 APP 区域（中国/欧洲/北美）切换 baseUrl</td></tr><tr><td><code>httpPaasInstance</code></td><td>PaaS 接口请求，使用 <code>apiPathRequest</code> 接口</td></tr></tbody></table><p>两者都基于 <code>@quec/rn-network-module</code> 原生模块发起请求，支持 GET / POST / PUT / DELETE / PATCH 方法。</p><hr><h3 id="src-assets-—-静态资源" tabindex="-1"><code>src/assets/</code> — 静态资源 <a class="header-anchor" href="#src-assets-—-静态资源" aria-label="Permalink to “src/assets/ — 静态资源”">​</a></h3><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>assets/</span></span>
<span class="line"><span>└── image/                       # 图片资源</span></span>
<span class="line"><span>    ├── ic_alarm_fault.png       # 告警故障图标（浅色）</span></span>
<span class="line"><span>    ├── ic_alarm_fault_dark.png  # 告警故障图标（深色）</span></span>
<span class="line"><span>    ├── ic_back.png              # 返回按钮图标（浅色）</span></span>
<span class="line"><span>    ├── ic_back_dark.png         # 返回按钮图标（深色）</span></span>
<span class="line"><span>    ├── ic_menu_arrow.png        # 菜单箭头图标</span></span>
<span class="line"><span>    ├── ic_more_setting.png      # 更多设置图标（浅色）</span></span>
<span class="line"><span>    ├── ic_more_setting_dark.png # 更多设置图标（深色）</span></span>
<span class="line"><span>    ├── ic_msg_empty.png         # 消息为空占位图（浅色）</span></span>
<span class="line"><span>    ├── ic_msg_empty_dark.png    # 消息为空占位图（深色）</span></span>
<span class="line"><span>    ├── ic_net_error.png         # 网络错误占位图（浅色）</span></span>
<span class="line"><span>    ├── ic_net_error_dark.png    # 网络错误占位图（深色）</span></span>
<span class="line"><span>    ├── ic_no_device.png         # 无设备占位图</span></span>
<span class="line"><span>    ├── ic_no_tsl.png            # 无物模型占位图（浅色）</span></span>
<span class="line"><span>    ├── ic_no_tsl_dark.png       # 无物模型占位图（深色）</span></span>
<span class="line"><span>    ├── no_device_data.png       # 无设备数据占位图（浅色）</span></span>
<span class="line"><span>    └── no_device_data_dark.png  # 无设备数据占位图（深色）</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title custom-block-title-default">TIP</p><p>所有图标资源均提供浅色/深色双版本，以适配主题切换。</p></div><hr><h3 id="src-components-—-通用组件" tabindex="-1"><code>src/components/</code> — 通用组件 <a class="header-anchor" href="#src-components-—-通用组件" aria-label="Permalink to “src/components/ — 通用组件”">​</a></h3><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>components/</span></span>
<span class="line"><span>├── empty-view/                  # 空状态视图组件</span></span>
<span class="line"><span>│   └── index.tsx</span></span>
<span class="line"><span>├── loading/                     # Loading 加载组件</span></span>
<span class="line"><span>│   └── index.tsx</span></span>
<span class="line"><span>├── net-error/                   # 网络错误视图组件</span></span>
<span class="line"><span>│   └── index.tsx</span></span>
<span class="line"><span>├── quec-container/              # 页面容器组件</span></span>
<span class="line"><span>│   └── index.tsx</span></span>
<span class="line"><span>└── quec-header/                 # 自定义导航头组件</span></span>
<span class="line"><span>    ├── index.tsx</span></span>
<span class="line"><span>    └── style.ts</span></span></code></pre></div><table tabindex="0"><thead><tr><th>组件</th><th>说明</th></tr></thead><tbody><tr><td><code>empty-view</code></td><td>数据为空时的占位视图</td></tr><tr><td><code>loading</code></td><td>全局 Loading 弹窗，支持自定义超时和回调</td></tr><tr><td><code>net-error</code></td><td>网络异常时的错误提示视图</td></tr><tr><td><code>quec-container</code></td><td>页面容器封装，提供统一的布局结构</td></tr><tr><td><code>quec-header</code></td><td>自定义导航头部组件，支持自定义样式</td></tr></tbody></table><hr><h3 id="src-config-—-项目配置常量" tabindex="-1"><code>src/config/</code> — 项目配置常量 <a class="header-anchor" href="#src-config-—-项目配置常量" aria-label="Permalink to “src/config/ — 项目配置常量”">​</a></h3><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>config/</span></span>
<span class="line"><span>├── attr.config.ts               # 物模型属性标识常量（由脚本自动生成）</span></span>
<span class="line"><span>├── channel.config.ts            # 通信渠道常量（自动/WS/WIFI/BLE）</span></span>
<span class="line"><span>├── color.config.ts              # 主题颜色配置（浅色/深色）</span></span>
<span class="line"><span>├── device.config.ts             # 设备相关常量（类型、在线状态枚举等）</span></span>
<span class="line"><span>├── dp.config.ts                 # 数据点属性类型常量（BOOL/INT/FLOAT/ENUM 等）</span></span>
<span class="line"><span>├── event-type.config.ts         # 事件类型常量（设备上下线、DPS 更新等）</span></span>
<span class="line"><span>├── image.config.ts              # 主题图片资源映射（浅色/深色）</span></span>
<span class="line"><span>├── route-page.config.ts         # 路由页面名称常量</span></span>
<span class="line"><span>├── text-component-default.ts    # Text 组件默认字体样式</span></span>
<span class="line"><span>└── web-socket.config.ts         # WebSocket 命令字 &amp; 消息类型常量</span></span></code></pre></div><hr><h3 id="src-hooks-—-自定义-hooks" tabindex="-1"><code>src/hooks/</code> — 自定义 Hooks <a class="header-anchor" href="#src-hooks-—-自定义-hooks" aria-label="Permalink to “src/hooks/ — 自定义 Hooks”">​</a></h3><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>hooks/</span></span>
<span class="line"><span>├── index.ts                     # 统一导出</span></span>
<span class="line"><span>├── theme.ts                     # 主题相关 Hooks（useThemeColors、useThemeImg 等）</span></span>
<span class="line"><span>├── use-constructor.hook.ts      # 构造器 Hook（模拟类组件 constructor）</span></span>
<span class="line"><span>├── use-go-back.hook.ts          # 返回导航 Hook</span></span>
<span class="line"><span>├── use-init-event.hook.ts       # 初始化事件监听 Hook</span></span>
<span class="line"><span>├── use-navigation.hook.ts       # 导航 Hook 封装</span></span>
<span class="line"><span>├── use-tab-change.hook.ts       # Tab 切换监听 Hook</span></span>
<span class="line"><span>└── use-tsl-writer(no used).hook.ts  # TSL 写入 Hook（未使用）</span></span></code></pre></div><hr><h3 id="src-i18n-—-国际化" tabindex="-1"><code>src/i18n/</code> — 国际化 <a class="header-anchor" href="#src-i18n-—-国际化" aria-label="Permalink to “src/i18n/ — 国际化”">​</a></h3><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>i18n/</span></span>
<span class="line"><span>├── helper.ts                    # i18n 初始化辅助（setupI18n）</span></span>
<span class="line"><span>├── i18n.ts                      # i18n 实例 &amp; 翻译函数</span></span>
<span class="line"><span>└── locales/                     # 语言文件</span></span>
<span class="line"><span>    ├── zh.ts                    # 中文翻译</span></span>
<span class="line"><span>    └── en.ts                    # 英文翻译</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title custom-block-title-default">TIP</p><p>开发环境（<code>__DEV__</code>）下使用本地 <code>locales/</code> 语言文件；生产环境使用 <code>@quec/rn-language-module</code> 提供的远程语言文件。 如果您想了解更多关于多语言的配置和使用，可以查看 <a href="./i18n.html">面板的多语言配置</a>。</p></div><hr><h3 id="src-page-—-页面文件" tabindex="-1"><code>src/page/</code> — 页面文件 <a class="header-anchor" href="#src-page-—-页面文件" aria-label="Permalink to “src/page/ — 页面文件”">​</a></h3><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>page/</span></span>
<span class="line"><span>├── main-page/                   # 首页</span></span>
<span class="line"><span>│   ├── index.tsx</span></span>
<span class="line"><span>│   └── styles.ts</span></span>
<span class="line"><span>├── alarm-fault-page/            # 告警故障页面</span></span>
<span class="line"><span>│   ├── index.tsx</span></span>
<span class="line"><span>│   └── style.ts</span></span>
<span class="line"><span>└── setting-page/                # 设置页面</span></span>
<span class="line"><span>    └── index.tsx</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title custom-block-title-default">TIP</p><p>可通过 <code>yarn addPage</code> 脚本快速添加新页面，会自动生成页面组件、样式文件，并完成路由注册。</p></div><hr><h3 id="src-router-—-路由管理" tabindex="-1"><code>src/router/</code> — 路由管理 <a class="header-anchor" href="#src-router-—-路由管理" aria-label="Permalink to “src/router/ — 路由管理”">​</a></h3><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>router/</span></span>
<span class="line"><span>├── index.tsx                    # 路由配置 &amp; NavigationContainer</span></span>
<span class="line"><span>└── router.d.ts                  # 路由参数类型声明</span></span></code></pre></div><p>路由基于 <code>@react-navigation/native-stack</code> 实现，通过 <code>PageRoutes</code> 对象统一管理。每个页面使用 <code>PageRouterImp</code> 类包装页面名称、组件引用和导航配置项。</p><hr><h3 id="src-store-—-状态管理" tabindex="-1"><code>src/store/</code> — 状态管理 <a class="header-anchor" href="#src-store-—-状态管理" aria-label="Permalink to “src/store/ — 状态管理”">​</a></h3><p>空目录。面板的核心状态通过 SDK 提供的 Store 进行管理：</p><ul><li><strong>设备物模型状态</strong> — 通过 <code>createDpsModelStore()</code> 创建，来自 <code>@quec/panel-model-kit</code></li><li><strong>设备信息状态</strong> — 通过 <code>createDeviceStore()</code> 创建，来自 <code>@quec/panel-device-kit</code></li></ul><hr><h3 id="src-style-—-全局样式" tabindex="-1"><code>src/style/</code> — 全局样式 <a class="header-anchor" href="#src-style-—-全局样式" aria-label="Permalink to “src/style/ — 全局样式”">​</a></h3><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>style/</span></span>
<span class="line"><span>├── constant.ts                  # 平台判断、屏幕尺寸常量</span></span>
<span class="line"><span>├── dimens.ts                    # 字体 &amp; 控件尺寸常量</span></span>
<span class="line"><span>├── helper.ts                    # 原生样式修补（固定字体大小、平台适配）</span></span>
<span class="line"><span>└── themes/                      # 主题定义</span></span>
<span class="line"><span>    ├── index.ts                 # 主题导出 &amp; useTheme Hook</span></span>
<span class="line"><span>    ├── light-theme.ts           # 浅色主题</span></span>
<span class="line"><span>    ├── dark-theme.ts            # 深色主题</span></span>
<span class="line"><span>    └── types.ts                 # 主题图片类型定义</span></span></code></pre></div><hr><h3 id="src-types-—-类型定义" tabindex="-1"><code>src/types/</code> — 类型定义 <a class="header-anchor" href="#src-types-—-类型定义" aria-label="Permalink to “src/types/ — 类型定义”">​</a></h3><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>types/</span></span>
<span class="line"><span>├── index.ts                     # 统一导出</span></span>
<span class="line"><span>├── global.d.ts                  # 全局类型声明（全局函数、HTTP 响应类型等）</span></span>
<span class="line"><span>├── assets/                      # 静态资源类型（由脚本自动生成）</span></span>
<span class="line"><span>│   └── index.ts                 # AssetsName 类型 &amp; 资源映射</span></span>
<span class="line"><span>├── common/                      # 通用类型</span></span>
<span class="line"><span>│   └── index.ts</span></span>
<span class="line"><span>├── model/                       # 物模型类型</span></span>
<span class="line"><span>│   └── index.ts                 # ModelsType 类型 &amp; modelDefinition 定义</span></span>
<span class="line"><span>├── page-props/                  # 页面 Props 类型</span></span>
<span class="line"><span>│   └── index.ts                 # PageProps &amp; PagePropsRoute 接口</span></span>
<span class="line"><span>└── route/                       # 路由类型</span></span>
<span class="line"><span>    └── index.ts                 # PageRouterImp 类</span></span></code></pre></div><p><code>global.d.ts</code> 声明了以下全局类型：</p><ul><li><code>Nullable&lt;T&gt;</code> / <code>Recordable&lt;T&gt;</code> — 通用泛型工具类型</li><li><code>loading()</code> / <code>toast()</code> / <code>loadingDismiss()</code> — 全局函数</li><li><code>HttpSaaSResponseType&lt;T&gt;</code> — SaaS 接口响应类型</li><li><code>HttpSaaSListResponseType&lt;T&gt;</code> — SaaS 列表接口响应类型</li><li><code>HttpPaaSResponseType&lt;T&gt;</code> — PaaS 接口响应类型</li></ul><hr><h3 id="src-util-—-工具函数" tabindex="-1"><code>src/util/</code> — 工具函数 <a class="header-anchor" href="#src-util-—-工具函数" aria-label="Permalink to “src/util/ — 工具函数”">​</a></h3><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>util/</span></span>
<span class="line"><span>├── index.ts                     # 统一导出</span></span>
<span class="line"><span>├── assets.util.ts               # 静态资源工具函数</span></span>
<span class="line"><span>├── data.util.ts                 # 数据处理工具函数</span></span>
<span class="line"><span>├── q-log.util.ts                # 日志工具（基于 @quec/rn-log-module）</span></span>
<span class="line"><span>├── ratio.util.ts                # 屏幕适配比例计算工具</span></span>
<span class="line"><span>├── regex.util.ts                # 正则表达式工具函数</span></span>
<span class="line"><span>├── string.util.ts               # 字符串处理工具函数</span></span>
<span class="line"><span>├── time.util.ts                 # 时间处理工具函数</span></span>
<span class="line"><span>└── to.util.ts                   # Promise 异常捕获工具（await-to-js 风格）</span></span></code></pre></div><hr><h2 id="readmes-—-开发指引文档" tabindex="-1"><code>READMES/</code> — 开发指引文档 <a class="header-anchor" href="#readmes-—-开发指引文档" aria-label="Permalink to “READMES/ — 开发指引文档”">​</a></h2><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>READMES/</span></span>
<span class="line"><span>├── README_START.md              # 项目启动指南</span></span>
<span class="line"><span>├── StartPanel.md                # 面板开发入门</span></span>
<span class="line"><span>├── Component.md                 # 组件开发说明</span></span>
<span class="line"><span>├── Menu.md                      # 菜单配置说明</span></span>
<span class="line"><span>├── Model.md                     # 物模型使用说明</span></span>
<span class="line"><span>├── Request.md                   # 网络请求使用说明</span></span>
<span class="line"><span>└── Store.md                     # 状态管理使用说明</span></span></code></pre></div><h2 id="tests-—-单元测试" tabindex="-1"><code>__tests__/</code> — 单元测试 <a class="header-anchor" href="#tests-—-单元测试" aria-label="Permalink to “__tests__/ — 单元测试”">​</a></h2><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>__tests__/</span></span>
<span class="line"><span>└── App-test.js                  # App 组件基础测试</span></span></code></pre></div><hr><h2 id="核心依赖一览" tabindex="-1">核心依赖一览 <a class="header-anchor" href="#核心依赖一览" aria-label="Permalink to “核心依赖一览”">​</a></h2><table tabindex="0"><thead><tr><th>包名</th><th>用途</th></tr></thead><tbody><tr><td><code>@quec/panel-device-kit</code></td><td>设备状态管理（设备信息、在线状态、DPS 事件监听）</td></tr><tr><td><code>@quec/panel-model-kit</code></td><td>物模型状态管理（DPS Model Store、TSL 模型类型）</td></tr><tr><td><code>@quec/panel-components-kit</code></td><td>UI 组件库（ThemeProvider、主题工具等）</td></tr><tr><td><code>@quec/panel-theme-kit</code></td><td>主题系统（字体样式、Text 修补等）</td></tr><tr><td><code>@quec/panel-theme-kit-config</code></td><td>主题配置数据</td></tr><tr><td><code>@quec/panel-business-kit</code></td><td>业务组件（PageContainer 等）</td></tr><tr><td><code>@quec/panel-universalsetting-component</code></td><td>通用设置页组件</td></tr><tr><td><code>@quec/panel-component-customer-attrs</code></td><td>客户自定义属性组件</td></tr><tr><td><code>@quec/rn-device-module</code></td><td>原生设备模块</td></tr><tr><td><code>@quec/rn-network-module</code></td><td>原生网络请求模块</td></tr><tr><td><code>@quec/rn-language-module</code></td><td>原生多语言模块</td></tr><tr><td><code>@quec/rn-router-module</code></td><td>原生路由模块</td></tr><tr><td><code>@quec/rn-user-module</code></td><td>原生用户模块</td></tr><tr><td><code>@quec/rn-log-module</code></td><td>原生日志模块</td></tr><tr><td><code>@quec/rn-tab-module</code></td><td>原生 Tab 模块</td></tr><tr><td><code>@quec/rn-businesspanel-module</code></td><td>原生业务面板模块</td></tr></tbody></table><h2 id="常用开发命令" tabindex="-1">常用开发命令 <a class="header-anchor" href="#常用开发命令" aria-label="Permalink to “常用开发命令”">​</a></h2><table tabindex="0"><thead><tr><th>命令</th><th>说明</th></tr></thead><tbody><tr><td><code>yarn start</code></td><td>启动 Metro 开发服务</td></tr><tr><td><code>yarn android</code></td><td>运行 Android 应用</td></tr><tr><td><code>yarn ios</code></td><td>运行 iOS 应用</td></tr><tr><td><code>yarn build:panel</code></td><td>构建面板产物（交互式输入版本号）</td></tr><tr><td><code>yarn addPage</code></td><td>一键添加新页面</td></tr><tr><td><code>yarn getModelTypes</code></td><td>根据物模型 JSON 生成类型</td></tr><tr><td><code>yarn gen:assets</code></td><td>生成静态资源类型映射</td></tr><tr><td><code>yarn lint</code></td><td>代码检查</td></tr><tr><td><code>yarn lint:fix</code></td><td>代码检查并自动修复</td></tr><tr><td><code>yarn format</code></td><td>代码格式化</td></tr><tr><td><code>yarn test</code></td><td>运行单元测试</td></tr></tbody></table>`,80)])])}const k=a(p,[["render",i]]);export{g as __pageData,k as default};
