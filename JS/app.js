import { renderLogin, renderHome } from './router.js';
import { checkAuth } from './controllers/authController.js';

async function init() {
    const session = await checkAuth();
    if (session) {
        renderHome();
    } else {
        renderLogin();
    }
}

window.addEventListener('load', init);