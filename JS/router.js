import { loginView } from './Views/loginView.js';
import { signupView } from './Views/signupView.js';
import { homeView } from './Views/homeView.js';
import { setupLoginListener, setupSignupListener, checkAuth, logout } from './controllers/authController.js';

export async function renderLogin() {
    const session = await checkAuth();
    if (session) {
        renderHome();
        return;
    }
    document.getElementById('content').innerHTML = loginView;
    setupLoginListener();
    document.getElementById('btnIrCadastro').addEventListener('click', renderSignup);
}

export async function renderSignup() {
    const session = await checkAuth();
    if (session) {
        renderHome();
        return;
    }
    document.getElementById('content').innerHTML = signupView;
    setupSignupListener();
    document.getElementById('btnIrLogin').addEventListener('click', renderLogin);
}

export async function renderHome() {
    const session = await checkAuth();
    if (!session) {
        renderLogin();
        return;
    }
    document.getElementById('content').innerHTML = homeView;
    
    const btnLogout = document.getElementById('btnLogout');
    if (btnLogout) {
        btnLogout.addEventListener('click', async () => {
            await logout();
        });
    }
}