export default defineNuxtRouteMiddleware((to) => {
    
    console.log('TO', to.meta) // object

    // if(to.fullPath.includes('admin')) {
    //   return '/auth'
    // }

    console.log('Heading to', to.path, 'but I think we should go somewhere else...')
    
   
  })