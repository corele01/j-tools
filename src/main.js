import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Antd from 'ant-design-vue';
import {codemirror} from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'ant-design-vue/dist/antd.css';
import {get,post} from './utils/http'

Vue.config.productionTip = false

Vue.use(Antd);
Vue.use(codemirror)

//定义全局变量
Vue.prototype.$post=post;
Vue.prototype.$get=get;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
