import { defineStore } from 'pinia'

export const useBlogStore = defineStore('blog', {
    state: () => {
        return {
            test: 'Hello World'
        }
    }
})