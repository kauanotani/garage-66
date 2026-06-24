import { loginView } from './Views/loginView.js';

const routes = {
    '/': '<h1>Home - Bem-vindo à Garagem 66</h1>',
    '/login': loginView
};

export function navigate(path) {
    window.history.pushState({}, path, window.location.origin + path);
    render(path);
}

export function render(path) {
    const content = document.getElementById('content');
    
    content.innerHTML = routes[path] || routes['/'];
}