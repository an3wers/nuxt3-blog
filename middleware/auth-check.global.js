import {authStore} from '../stores/auth'

export default defineNuxtRouteMiddleware((to) => {
    const {ssrContext} = useNuxtApp()
    const storeAuth = authStore()

    // console.log('ssrContext', ssrContext)

    if (process.client) {
        storeAuth.initAuth(null)
    } else {
        storeAuth.initAuth(ssrContext?.req?.rawHeaders)
    }

  })
