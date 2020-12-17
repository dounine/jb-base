import { createApp, h } from 'vue'
import App from './App.vue'
// import router from './router'
import store from './store'
import installElementPlus from './plugins/element.js'
import { registerMicroApps, prefetchApps, start } from 'qiankun'

let app: any = null
const render = ({ loading }) => {
    if (!app) {
        const tmpApp = createApp({
            data() {
                return {
                    loading,
                    createTime: new Date().getTime()
                }
            },
            render() {
                return h(App, {
                    loading: this.loading,
                    createTime: new Date().getTime()
                })
            }
        }).use(store)
        installElementPlus(tmpApp)
        app = tmpApp.mount('#rootApp')
    } else {
        if (!loading) {
            setTimeout(() => {
                app.loading = loading
            }, 600 - (new Date().getTime() - app.createTime))
        } else if (app.loading !== loading) {
            app.loading = loading
            app.createTime = new Date().getTime()
        }
    }
}
const loader = loading => render({ loading });
registerMicroApps([
    {
        name: 'jb-login',
        entry: 'http://localhost:8083',
        container: '#container',
        loader,
        props: {
            theme: store.state.theme,
        },
        activeRule: '/login'
    },
    {
        name: 'jb-operator',
        entry: 'http://localhost:8082',
        container: '#container',
        loader,
        props: {
            theme: store.state.theme,
        },
        activeRule: '/operator'
    }
], {
    // beforeMount: app => {
    //     console.log('beforeMount');
    //     store.commit('setLoading', true);
    //     return Promise.resolve()
    // },
    // afterMount: app => {
    //     console.log('afterMount');
    //     store.commit('setLoading', false);
    //     return Promise.resolve()
    // }
})
// prefetchApps([{
//     name: 'jb-login',
//     entry: 'http://localhost:8083'
// }])
if (window.location.href.indexOf('/login') === -1) {
    store.dispatch('fetchUserInfo')
}

render({ loading: true })
store.subscribe((mutation, state) => {
    if (mutation.type === 'setLogin') {
        if (state.login) {
            console.log('已登录');
        } else {
            console.log('token失效');
            //加载登录子应用
            // router.push(`/login?redirect=${encodeURI(window.location.href)}`)
        }

    }
})
start()