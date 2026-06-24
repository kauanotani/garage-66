import { navigate, render } from './router.js';

window.navigate = navigate;

window.addEventListener('load', () => {
    render(window.location.pathname);
});