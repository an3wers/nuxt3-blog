import { defineStore } from 'pinia'
import Cookies from 'js-cookie'

export const authStore = defineStore('auth', {
    state: () => {
        return {
            token: null
        }
    },
    getters: {
        checkAuthUser(state) {
            return !!state.token
        }
    },
    actions: {
        async authUser(userData) {
            const key = 'AIzaSyCcFderO-gm1_ki1Z1UhzpGfh0AXY9OKkw'
            // console.log('login: ', userData)

            try {
                const response = await $fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`, {method: 'POST', body: {...userData, "returnSecureToken": true}})
                
                const token = response.idToken

                this.token = token
                localStorage.setItem('jwt', token)
                Cookies.set('jwt', token, {sameSite: 'None', secure: true})


                //response.idToken
            } catch (error) {
                console.log(error)
            }
        },

        logoutUser() {
            this.token = null
            localStorage.removeItem('jwt')
            Cookies.remove('jwt')
            
        },

        initAuth(req) {
            // this.token = Cookies.get('jwt')
            let token
            if(req) {
                const jwtToken = req.find(t => t.trim().startsWith('jwt='))

                if(jwtToken) {
                    token = jwtToken.split('=')[1]
                    this.token = token
                } else {
                    return false
                }

            } else {
                if(process.client) {
                    token = localStorage.getItem('jwt')
                }
                this.token = token
            }
        },

    }
})