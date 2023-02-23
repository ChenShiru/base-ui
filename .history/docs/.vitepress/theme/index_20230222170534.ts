import DefaultTheme from 'vitepress/theme'
//ts-ignore
import HelloWorld from '../../../src/components/HelloWorld.vue'
//ts-ignore
import Test from '../../../src/components/Test.tsx'

export default {
  ...DefaultTheme,

  //扩展应用程序实例
  enhanceApp({ app }) {
    //注册组件
    app.component('HelloWorld', HelloWorld)
    app.component('Test', Test)
  }
}
