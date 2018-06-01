/******************************************
 *  Author : niuzz niuzz@hotmail.com
 *  Created On : Tue Mar 06 2018
 *  File : index.js
 *******************************************/
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
import bootstrap from 'bootstrap'
import './scss/app.scss'
import Vue from 'vue'
import Layout from 'pages/Layout.vue'
import 'swiper/dist/css/swiper.min.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

Vue.prototype.$ = $

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  components: {
    Layout
  }
})
