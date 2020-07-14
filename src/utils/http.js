import axios from 'axios'
//import qs from 'qs'

const host = process.env.VUE_APP_API_URL
const isDebug = process.env.VUE_APP_DEBUG

axios.defaults.timeout = 10000
axios.defaults.url = host

axios.interceptors.request.use(
    config => {
        config.baseUrl = host
        config.url = config.baseUrl + config.url
        if (config.method === 'post'){
            //config.data = qs.stringify(config.data)
        }
        if (isDebug){
            window.console.log("Request => " + JSON.stringify(config))
        }
        return config
    },
    err => {
        window.console.log("Request Error => " + err)
    })

//请求返回拦截
axios.interceptors.response.use(response => {
    if (isDebug){
        window.console.log("Response <= " + JSON.stringify(response.data))
    }
    return response;
},
error => {
    window.console.log("Response Error => " + error)
    return Promise.reject(error)
})

export function get(url,params={}){
    return new Promise((resolve,reject) => {
        axios.get(url,{
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
        axios.post(url,data)
             .then(response => {
               resolve(response.data);
             },err => {
               reject(err)
             })
      })
}
