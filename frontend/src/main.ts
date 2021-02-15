import { createApp } from 'vue';
import { DefaultApolloClient } from '@vue/apollo-composable';

import App from '@/App.vue';
import '@/registerServiceWorker';
import router from '@/router';
import apolloClient from '@/vue-apollo';

createApp(App).use(router).provide(DefaultApolloClient, apolloClient).mount('#app');
