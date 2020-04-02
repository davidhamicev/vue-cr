import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/app/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.component('Loader', Loader)

Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)

firebase.initializeApp({
  apiKey: "AIzaSyAKqr4jU90oMeK9d3WcP3ArbUd6WBCIYaE",
  authDomain: "vue-crm-d.firebaseapp.com",
  databaseURL: "https://vue-crm-d.firebaseio.com",
  projectId: "vue-crm-d",
  storageBucket: "vue-crm-d.appspot.com",
  messagingSenderId: "179100387358",
  appId: "1:179100387358:web:27ee593d625bac9884c60f",
  measurementId: "G-91Q406MZXQ"
})
let app
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

