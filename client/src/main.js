// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import './assets/css/style.css'
// require('./assets/css/bootstrap.min.css')
// require('./assets/css/responsive.css')
// require('./assets/css/owl.carousel.min.css')
// require('./assets/css/woocommerce.css')
// require('./assets/css/font-awesome.min.css')
// require('./assets/css/iconfont.css')
// require('./assets/css/isotope.css')
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})