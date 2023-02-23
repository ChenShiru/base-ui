import DefaultTheme from 'vitepress/theme'
// 主题样式
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
// 插件的组件，主要是demo组件
import Demo from 'vitepress-theme-demoblock/dist/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/components/DemoBlock.vue'

import Button from '../../../src/button/src/Button'
export default {
  ...DefaultTheme,

  //扩展应用程序实例
  enhanceApp({ app }) {
    // register global components
    app.component('s-button', Button)
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  }
}
