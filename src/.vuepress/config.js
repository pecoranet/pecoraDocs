module.exports = {

  title: 'PecoraDocs',
  description: 'Pecora Documentation',

  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  dest: 'docs',
  base: '/pecoraDocs/',

  themeConfig: {
    editLinks: false,
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Welcome',
        link: '/'
      },
      {
        text: 'Get Started',
        link: '/GetStarted/'
      },
      {
        text: 'Installation',
        link: '/Installation/'
      },
      {
        text: 'Using Pecora',
        link: '/Using/'
      },
      {
        text: 'Development',
        link: '/Development/'
      }     
    ],
    sidebar: [
      '/',
      '/GetStarted/',
      '/Installation/',
      '/Using/',
      '/Development/'

    ]

  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]

}
