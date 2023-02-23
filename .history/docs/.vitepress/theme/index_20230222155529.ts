import DefaultTheme from 'vitepress/theme'
//ts-ignore
import HelloWorld from '../../../src/components/HelloWorld.vue'
export default {
  ...DefaultTheme,

  //扩展应用程序实例
  enhanceApp({ app }) {
    //注册组件
    app.component('HelloWorld', HelloWorld)
  }
}
