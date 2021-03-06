import Vue from 'vue'
import 'babel-polyfill'
import router from './router'
import smooth from './plugins'

Vue.use(smooth);

const app = new Vue({
    router
}).$mount('#app');

if (environment === 'dev') {
    Vue.config.devtools = true;
}

// 热重载配置
if (module.hot) {
    module.hot.accept();
}
