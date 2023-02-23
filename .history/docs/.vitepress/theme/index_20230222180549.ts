import DefaultTheme from 'vitepress/theme'
import Button from '../../../src/button/src/Button'
export default {
  ...DefaultTheme,

  //扩展应用程序实例
  enhanceApp({ app }) {
    // register global components
    app.component('s-button', Button)
  }
}
