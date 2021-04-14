import { authRequest } from './auth.js'

const ping = () => {
  
  return authRequest.get('/api/get_courses/')
    .then(response=>{
      return Promise.resolve(response.data)
    }).catch((error)=> {
      return Promise.reject(error)
    });
}


export { ping }
