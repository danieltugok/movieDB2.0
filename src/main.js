import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

const app = createApp(App).use(Quasar, quasarUserOptions);

import globalMixin from './mixins/globalMixin';


app.use(router)
app.use(store)
app.mount('#app')
