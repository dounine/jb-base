import { createApp, h } from 'vue'
import App from './App.vue'
import store from './store'
import installElementPlus from './plugins/element.js'
import { registerMicroApps, prefetchApps, start } from 'qiankun'
import url from 'url'

let app: any = null
const render = ({ loading }) => {
    if (!app) {
        const tmpApp = createApp({
            data() {
                return {
                    loading,
                    createTime: new Date().getTime(),
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
        name: 'jb-user',
        entry: 'http://localhost:8083',
        container: '#container',
        loader,
        props: {
            theme: store.state.theme,
        },
        activeRule: '/user'
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
    beforeMount: app => {
        console.log('beforeMount');
        return Promise.resolve()
    },
    afterMount: app => {
        console.log('afterMount');
        return Promise.resolve()
    }
})
if (window.location.href.indexOf('/login') === -1) {
    const query = url.parse(window.location.href, true).query
    if (query.token) {
        localStorage.setItem('token', query.token)
    } else if (localStorage.getItem('token')) {
        console.log('检查token有效');
        store.dispatch('fetchUserInfo', localStorage.getItem('token'))
    }
}
const redirectOperator = () => {
    if (window.location.pathname === '/') {
        history.pushState({}, '/operator', '/operator')
    }
}
redirectOperator()
window.addEventListener('popstate', function (e) {
    redirectOperator()
})


render({ loading: true })
store.subscribe((mutation, state) => {
    if (mutation.type === 'setLogin') {
        if (state.login) {
            console.log('已登录');
            const query = url.parse(window.location.href, true)
            if (query.query.token) {
                history.pushState({}, query.pathname, query.pathname);
            }
        } else {
            console.log('token失效');
            const query = url.parse(window.location.href, true)
            if (query.query.token) {
                history.pushState({}, query.pathname, query.pathname);
            }
        }
    }
})
start()