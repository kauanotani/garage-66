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
    setNav('navLogo', renderHome);
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

function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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

    const contactForm = document.getElementById('homeContactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const nome = contactForm.querySelector('input[name="name"]').value.trim();
            const email = contactForm.querySelector('input[name="email"]').value.trim();
            const mensagem = contactForm.querySelector('textarea[name="message"]').value.trim();
            const whatsappNumber = '5561996807260';
            const text = encodeURIComponent(`Olá, meu nome é ${nome}. Gostaria de mais informações. E-mail: ${email}. Mensagem: ${mensagem}`);
            window.location.href = `https://wa.me/${whatsappNumber}?text=${text}`;
        });
    }
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

function loadHomePage(activeNav = 'navHome') {
    document.getElementById('content').innerHTML = homeView;
    attachGlobalNavHandlers(activeNav);
    attachHomeInteractions();
}

export async function renderHome() {
    const session = await checkAuth();
    if (!session) {
        renderLogin();
        return;
    }

    loadHomePage('navHome');
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

    loadHomePage('navContato');
    scrollToSection('contato');
}

export async function renderAdmin() {
    document.getElementById('content').innerHTML = adminView;
    setupLoginListener();
    attachGlobalNavHandlers('navAdmin');
}

export async function renderDescVeiculo(carId) {
    const session = await checkAuth();
    if (!session) {
        renderLogin();
        return;
    }

    document.getElementById('content').innerHTML = descVeiculoView(carId);
    attachGlobalNavHandlers('navColecao');
}
