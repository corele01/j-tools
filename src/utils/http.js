import axios from 'axios'

axios.defaults.timeout = 10000

const host = 'http://localhost:8080/'

//请求返回拦截
axios.interceptors.response.use(response => {
    return response;
},
error => {
    return Promise.reject(error)
})

export function get(url,params={}){
    return new Promise((resolve,reject) => {
        axios.get(host+url,{
            params:params
        }).then(response => {
            resolve(response.data)
        }).catch(error =>{
            reject(error)
        })
    })
}

export function post(url,data={}){
    return new Promise((resolve,reject) => {
        axios.post(host+url,data)
             .then(response => {
               resolve(response.data);
             },err => {
               reject(err)
             })
      })
}
