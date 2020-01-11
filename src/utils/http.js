import axios from 'axios'
import {notification } from 'ant-design-vue'

axios.defaults.timeout = 10000

// const host = 'http://corele.top:8080/'
const host = 'http://127.0.0.1:8081/'

//请求返回拦截
axios.interceptors.response.use(response => {
    const data = response.data;
    if (data.code == 0){
        notification.error({
            message: '处理失败',
            description: data.message
        })
    }
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
