import { defineStore } from 'pinia'

export const useBlogStore = defineStore('blog', {
    state: () => {
        return {
           posts: []
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
                const res = await $fetch('https://blog-nuxtjs-c3952-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')

                this.posts = Object.keys(res).map(key => {
                    return {...res[key], id: key}
                })

            } catch (error) {
                console.log(error)
            }
           
        }
    }
})