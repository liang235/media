import { defineConfig } from 'vitepress'
import sidebar from './sidebar.mjs' // 侧边栏
import nav from './navbar.mjs' // 头部导航

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "自媒体学习",
  description: "自媒体学习",
  lang: 'zh-cn', // 语言
  base: './',
  head: [
    ['link', { rel: 'icon', href: '/learn-docs/vitepress-logo-mini.svg' }],
    ['meta', { 'http-equiv': 'Expires', 'content': '0' }],
    ['meta', { 'http-equiv': 'Pragma', 'content': 'no-cache' }],
    ['meta', { 'http-equiv': 'Cache-control', 'content': 'no-cache' }],
    ['meta', { 'http-equiv': 'Cache', 'content': 'no-cache' }],
  ],

  themeConfig: {
    // 多个侧边栏，根据页面路径显示不同的侧边栏
    sidebar,

    // 头部导航, https://vitepress.dev/reference/default-theme-config
    nav,

    // 可用于自定义出现在上一个和下一个链接上方的文本
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    // 标题大纲
    outlineTitle: '当前页导航',

    // 大纲显示级别：https://vitepress.vuejs.org/config/theme-config#outline
    outline: 'deep',

    // 搜索查询
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
          },
        },
      },
    },
  },
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
})
