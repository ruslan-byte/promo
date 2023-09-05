// https://nuxt.com/docs/api/configuration/nuxt-config
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
export default defineNuxtConfig({
  app: {
    baseURL: '/promo/',
    buildAssetsDir: 'assets', 
  },
  devtools: { enabled: true },
  vite: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver({importStyle: "sass"})],
      }),
    ],
  	css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/assets/scss/variables.scss" as *;`,
        }
      }
  	}
  },
  modules: [
    '@element-plus/nuxt'
  ],
})
