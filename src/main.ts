import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element.js'
import axios from './plugins/axios'
import { registerMicroApps, start } from 'qiankun'


let app: any = null
const render = ({ loading }) => {
    if (!app) {
        app = createApp(App).use(store).use(router).use(axios)
        installElementPlus(app)
        app.mount('#rootApp')
    } else {
        store.commit('setLoading', loading);
    }
}
const loader = loading => render({ loading });
registerMicroApps([
    {
        name: 'jb-operator',
        entry: 'http://localhost:8082',
        container: '#vue',
        loader,
        activeRule: '/operator'
    }
], {
    beforeMount: app => {
        console.log('beforeMount');
        return Promise.resolve()
    },
    afterMount: app => {
        console.log('afterMount');
        return Promise.resolve()
    }
})

render({ loading: true })
start()