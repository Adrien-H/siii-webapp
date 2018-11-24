const baseURL = 'http://localhost:8000'

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'SIII',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'SIII project' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: 'images/favicon.png' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {
    name: 'chasing-dots',
    color: '#3B8070',
    background: 'white',
    height: '4px'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    ['@nuxtjs/pwa', { icon: false }],
    '@nuxtjs/toast',
    // 'nuxt-i18n'
  ],

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/login', method: 'POST', propertyName: 'token' },
          user: { url: '/users/me', method: 'GET', propertyName: 'user' },
          logout: false,
          tokenRequired: true,
          tokenType: 'Bearer'
        }
      }
    },
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/'
    }
  },

  axios: {
    baseURL: baseURL
  },

  'nuxt-i18n': {
    baseUrl: baseURL,
    defaultLocale: 'fr',
    locales: [
      { code: 'fr', iso: 'fr-FR', file: 'fr-FR.js', name: 'Français' },
      { code: 'en', iso: 'en-EN', file: 'en-EN.js', name: 'English' }
    ],
    messages: {
      fr: {homepage: "Page d'accueil"},
      en: {homepage: "Homepage"},
    },
    langDir: 'translations/',
    strategy: 'prefix_and_default',
    lazy: true,
    vueI18n: {
      fallbackLocale: 'fr',
      silentTranslationWarn: true,
    }
  },

  toast: {
    position: 'top-right',
    duration: 2000
  }
}

