import Vue from 'vue'
import Layout from './Shared/Layout'
import { App, plugin } from '@inertiajs/inertia-vue'

window.axios = require('axios');
window.axios.defaults.headers.common['X-WP-Nonce'] = window.bbInertia.nonce;

Vue.use(plugin)

Vue.component('Layout', Layout)

const app = document.getElementById('app')

new Vue({
  render: h => h(App, {
    props: {
      initialPage: JSON.parse(app.dataset.page),
      resolveComponent: name => require(`./Pages/${name}`).default,
    },
  }),
}).$mount(app)
