import type { NavigationGuard } from 'vue-router'
<<<<<<< HEAD
export type MiddlewareKey = "auth"
=======
export type MiddlewareKey = "signup-validation"
>>>>>>> fdf309191c5aae59a3396292999b0c33a0672b92
declare module "../../node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}