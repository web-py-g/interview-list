import './assets/main.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Menubar from 'primevue/menubar'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import ProgressSpinner from 'primevue/progressspinner'

import { initializeApp } from 'firebase/app'

import App from './App.vue'
import router from './router'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCkbtd0RIghZv3pH5cOvi0FWjbPinsz0PM',
  authDomain: 'interview-list.firebaseapp.com',
  projectId: 'interview-list',
  storageBucket: 'interview-list.appspot.com',
  messagingSenderId: '348441912729',
  appId: '1:348441912729:web:150eaf779117e70b929f08'
}

initializeApp(firebaseConfig)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.use(ToastService)

app.component('app-menubar', Menubar)
app.component('app-button', Button)
app.component('app-input-text', InputText)
app.component('app-toast', Toast)
app.component('app-progress-spinner', ProgressSpinner)

app.mount('#app')
