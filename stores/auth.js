import { defineStore } from 'pinia'

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

                //response.idToken
            } catch (error) {
                console.log(error)
            }
        },

        logoutUser() {
            this.token = null
            localStorage.removeItem('jwt')
        }

    }
})