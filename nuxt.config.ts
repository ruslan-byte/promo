// https://nuxt.com/docs/api/configuration/nuxt-config
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
export default defineNuxtConfig({
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
          additionalData: `
            @use "~/assets/scss/variables.scss" as *;
            @use "~/assets/scss/normalize.scss" as *;
            @use "~/assets/scss/default.scss" as *;
            @use "~/assets/scss/element/variables.scss" as *;
            @use "~/assets/scss/fonts.scss" as *;
          `
        }
      }
  	}
  },
  modules: [
    '@element-plus/nuxt'
  ],
})
