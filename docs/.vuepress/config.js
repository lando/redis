module.exports = {
  lang: 'en-US',
  title: 'Lando',
  description: 'Lando Redis Plugin Documentation',
  base: '/redis/',
  head: [
    ['meta', {name: 'viewport', content: 'width=device-width, initial-scale=1'}],
    ['link', {rel: 'icon', href: '/redis/favicon.ico', size: 'any'}],
    ['link', {rel: 'icon', href: '/redis/favicon.svg', type: 'image/svg+xml'}],
    ['link', {rel: 'preconnect', href: '//fonts.googleapis.com'}],
    ['link', {rel: 'preconnect', href: '//fonts.gstatic.com', crossorigin: true}],
    ['link', {rel: 'stylesheet', href: '//fonts.googleapis.com/css2?family=Lexend:wght@500&display=swap'}],
  ],
  theme: '@lando/vuepress-theme-default-plus',
  themeConfig: {
    landoDocs: true,
    logo: '/images/icon.svg',
    docsDir: 'docs',
    docsBranch: 'main',
    repo: 'lando/redis',
    sidebarHeader: {
      enabled: true,
      title: 'Redis Plugin',
      icon: '/images/redisicon.png',
    },
    sidebar: [
      {
        text: 'Getting Started',
        link: '/index.html',
      },
      '/config.html',
      {
        text: 'Guides',
        collapsible: true,
        children: [
          {
            text: 'Accessing Redis Logs',
            link: '/accessing-logs.html',
          },
          {
            text: 'Installing extensions',
            link: '/installing-extensions.html',
          },
          {
            text: 'Installing node',
            link: '/installing-node.html',
          },
        ],
      },
      '/support.html',
      {text: 'Examples', link: 'https://github.com/lando/redis/tree/main/examples'},
      {text: 'Release Notes', link: 'https://github.com/lando/redis/releases'},
      '/development.html',
    ],
  },
};
