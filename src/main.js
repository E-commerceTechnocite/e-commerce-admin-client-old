import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import './assets/global.css'


createApp(App).component('quill-editor', QuillEditor).use(store).use(router).mount('#app')
