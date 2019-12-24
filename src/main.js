import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Antd from 'ant-design-vue';
import {codemirror} from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false

Vue.use(Antd);
Vue.use(codemirror)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
