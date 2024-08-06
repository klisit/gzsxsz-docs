import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '平台使用手册',
  description: '使用方式文档',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '后台操作', link: '/quick-start' }
    ],

    sidebar: [
      {
        text: '后台操作',
        items: [
          { text: '快速浏览', link: '/quick-start' },
          {
            text: 'cms 管理',
            link: '/manage/cms/index',
            items: [
              {
                text: '菜单管理',
                link: '/manage/cms/menu'
              }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/klisit/gzsxsz-docs' }
    ]
  }
})
