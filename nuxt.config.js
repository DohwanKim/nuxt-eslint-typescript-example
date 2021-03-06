export default {
  head: {
    title: 'nuxt-eslint-typescript-example',
    htmlAttrs: {
      lang: 'ko',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/moment',
  ],
  modules: ['@nuxtjs/axios', '@nuxtjs/proxy'],
  axios: {},
  build: {
    postcss: {
      plugins: {
        "precss": true
      },
    },
  },
}
