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
    '@nuxtjs/toast'
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
    baseURL: 'http://localhost:8000'
  },

  toast: {
    position: 'top-right',
    duration: 4000
  }
}

