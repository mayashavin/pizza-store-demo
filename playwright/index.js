// Import styles, initialize component theme here.
// import '../src/common.css';
import { beforeMount } from '@playwright/experimental-ct-vue/hooks';
import router from '../src/router'
beforeMount(async ({ app }) => {
    app.use(router);
 });