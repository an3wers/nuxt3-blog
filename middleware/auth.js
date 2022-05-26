import {authStore} from '../stores/auth'

export default defineNuxtRouteMiddleware((to) => { 
    const storeAuth = authStore()
       
    if(!storeAuth.checkAuthUser) {
        return '/auth'
    }
    
})


