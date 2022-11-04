import { defineStore } from 'pinia'

export const useBlogStore = defineStore('blog', {
    state: () => {
        return {
           posts: [],
           error: null,
           postLoading: false
        }
    },
    getters: {
        getPosts(state){
            return state.posts
        }
    },
    actions: {
        async loadPosts() {
            try {
                this.postLoading = true
                const res = await $fetch('https://blog-nuxtjs-c3952-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
                this.posts = Object.keys(res).map(key => {
                    return {...res[key], id: key}
                })

            } catch (error) {
                this.error = error
                console.log(error)
            } finally {
                this.postLoading = false
            }
           
        }
    }
})