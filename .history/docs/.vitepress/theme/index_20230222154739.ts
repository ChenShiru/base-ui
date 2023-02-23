import Theme from 'vitepress/dist/client/theme-default'
export default {
  ...Theme,
  enhanceApp({ app }) {
    //注册组件
    app.component('HelloWorld', HelloWorld)
  }
}
