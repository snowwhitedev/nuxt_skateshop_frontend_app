import webpack from "webpack";
export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, user-scalable=no" },
      { hid: "robots", name: "robots", content: "noindex" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */

  css: [
    "~assets/css/style.scss",
    "@/assets/css/variable.scss",
    "vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css"
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/global.js',
    {src: '~plugins/scrollbar', mode:'client'},
    {src: '~plugins/socialapi', mode:'client'}
    // {src: '~plugins/flickity', mode:'client'}
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    "nuxt-buefy",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    // Doc: https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv",
    "@nuxtjs/auth",
    '@nuxtjs/device'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        // global modules
        _: "lodash"
      })
    ],
    extend(config, ctx) {}
  },

  auth: {
    strategies: {
      google: {
        client_id:
          "182687969945-osgfltdq2jlq1vdgmuc91r7g51cib70g.apps.googleusercontent.com"
      }
    }
  }
}
