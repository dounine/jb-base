import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element.js'
import axios from './plugins/axios'
import { registerMicroApps, start } from 'qiankun'


registerMicroApps([
    {
        name: 'jb-operator',
        entry: 'http://localhost:8082',
        container: '#vue',
        activeRule: '/operator'
    }
], {
    beforeMount: app => {
        console.log('beforeMount');
        store.commit('setLoading', true)
        return Promise.resolve()
    },
    afterMount: app => {
        console.log('afterMount');
        store.commit('setLoading', false)
        return Promise.resolve()
    }
})

start()

const app = createApp(App).use(store).use(router).use(axios)
installElementPlus(app)
app.mount('#rootApp')