// plugind and
import Vue               from 'vue'
import { store }         from './store'
import App               from './App.vue'
import VCalendar from 'v-calendar';

// Use v-calendar, v-date-picker & v-popover components
Vue.use(VCalendar);

new Vue({
    el: '#app',
    store,
    render: h => h(App)
})
