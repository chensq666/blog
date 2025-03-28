const themeConfig = require('./config/theme/')

module.exports = {
  title: "陈坚强",
  description: 'Enjoy when you can, and endure when you must.',
  dest: './dist',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['script', { src: '/script/removeFooter.js',type:'text/javascript'}]
  ],
  base:'/blog/',
  theme: 'reco',
  themeConfig,
  markdown: {
    lineNumbers: true
  },
  plugins: ['@vuepress/medium-zoom', 'flowchart'] 
}  