import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
Vue.config.productionTip = false

Vue.use(VueResource)

Vue.http.options.root = 'https://vuejs-http-10010.firebaseio.com/data.json';
//Request interception
// Vue.http.interceptors.push((request, next) => {
//    console.log(request);
//    if (request.method == 'POST') {
//        request.method = 'PUT';
//    }
//    next();
// });

new Vue({
  render: h => h(App),
}).$mount('#app')
