import { loginView } from './Views/loginView.js';
import { signupView } from './Views/signupView.js';
import { homeView } from './Views/homeView.js';
import { sobreView } from './Views/sobreView.js';
import { carrosView } from './Views/carrosView.js';
import { contatoView } from './Views/contatoView.js';
import { adminView } from './Views/adminView.js';
import { descVeiculoView } from './Views/descVeiculoView.js';
import { setupLoginListener, setupSignupListener, checkAuth, logout } from './controllers/authController.js';

function setNav(id, fn) {
    const el = document.getElementById(id);
    if (el) {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            fn();
        });
    }
}

function attachGlobalNavHandlers(activeId = 'navHome') {
    setNav('navHome', renderHome);
    setNav('navSobre', renderSobre);
    setNav('navColecao', renderColecao);
    setNav('navContato', renderContato);
    setNav('navAdmin', renderAdmin);

    document.querySelectorAll('.main-nav a').forEach((link) => {
        link.classList.toggle('active', link.id === activeId);
    });

    const btnLogout = document.getElementById('btnLogout');
    if (btnLogout) btnLogout.addEventListener('click', async () => await logout());
}

function attachHomeInteractions() {
    const catalogButton = document.getElementById('btnVerCatalogo');
    if (catalogButton) {
        catalogButton.addEventListener('click', (e) => {
            e.preventDefault();
            renderColecao();
        });
    }

    document.querySelectorAll('.btn-details').forEach((button) => {
        button.addEventListener('click', (event) => {
            const carId = event.currentTarget.dataset.car;
            if (carId) renderDescVeiculo(carId);
        });
    });
}

function attachCollectionInteractions() {
    document.querySelectorAll('.btn-details').forEach((button) => {
        button.addEventListener('click', (event) => {
            const carId = event.currentTarget.dataset.car;
            if (carId) renderDescVeiculo(carId);
        });
    });
}

function attachDetailPageInteractions() {
    const backButton = document.getElementById('btnBackToCollection');
    if (backButton) {
        backButton.addEventListener('click', (event) => {
            event.preventDefault();
            renderColecao();
        });
    }
}

function scrollToFooter() {
    const footer = document.querySelector('.site-footer');
    if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
    }
}

export async function renderLogin() {
    const session = await checkAuth();
    if (session) {
        renderHome();
        return;
    }

    document.getElementById('content').innerHTML = loginView;
    setupLoginListener();

    const btnIrCadastro = document.getElementById('btnIrCadastro');
    if (btnIrCadastro) btnIrCadastro.addEventListener('click', renderSignup);
}

export async function renderSignup() {
    const session = await checkAuth();
    if (session) {
        renderHome();
        return;
    }

    document.getElementById('content').innerHTML = signupView;
    setupSignupListener();

    const btnIrLogin = document.getElementById('btnIrLogin');
    if (btnIrLogin) btnIrLogin.addEventListener('click', renderLogin);
}

export async function renderHome() {
    const session = await checkAuth();
    if (!session) {
        renderLogin();
        return;
    }

    document.getElementById('content').innerHTML = homeView;
    attachGlobalNavHandlers('navHome');
    attachHomeInteractions();
}

export async function renderSobre() {
    const session = await checkAuth();
    if (!session) {
        renderLogin();
        return;
    }

    document.getElementById('content').innerHTML = sobreView;
    attachGlobalNavHandlers('navSobre');
}

export async function renderColecao() {
    const session = await checkAuth();
    if (!session) {
        renderLogin();
        return;
    }

    document.getElementById('content').innerHTML = carrosView;
    attachGlobalNavHandlers('navColecao');
    attachCollectionInteractions();
}

export async function renderContato() {
    const session = await checkAuth();
    if (!session) {
        renderLogin();
        return;
    }

    const footer = document.querySelector('.site-footer');
    if (footer) {
        scrollToFooter();
        return;
    }

    document.getElementById('content').innerHTML = contatoView;
    attachGlobalNavHandlers('navContato');
}

export async function renderAdmin() {
    const session = await checkAuth();
    if (session) {
        renderHome();
        return;
    }

    document.getElementById('content').innerHTML = adminView;
    setupLoginListener();
    attachGlobalNavHandlers();
}

export async function renderDescVeiculo(carId) {
    const session = await checkAuth();
    if (!session) {
        renderLogin();
        return;
    }

    document.getElementById('content').innerHTML = descVeiculoView(carId);
    attachGlobalNavHandlers();
    attachDetailPageInteractions();
}
