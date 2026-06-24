const routes = {
    '/': 'home',
    '/login': 'login'
};

export function navigate(path) {
    window.history.pushState({}, path, window.location.origin + path);
    render(path);
}

export function render(path) {
    const page = routes[path] || 'home';
    const content = document.getElementById('content');
    
    content.innerHTML = `<h1>Você está na página: ${page}</h1>`;
}