import DefaultTheme from 'vitepress/theme'

import HelloWorld from '../../../src/components/HelloWorld'
import Test from '../../../src/components/Test'
export default {
  ...DefaultTheme,

  //扩展应用程序实例
  enhanceApp({ app }) {
    //注册组件
    app.component('HelloWorld', HelloWorld)
    app.component('Test', Test)
  }
}
