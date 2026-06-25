import { supabase } from '../models/supabaseClient.js';

export function setupLoginListener() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const { error } = await supabase.auth.signInWithPassword({ email, password });
            if (error) alert('Erro ao entrar: ' + error.message);
            else {
                alert('Login realizado com sucesso!');
                window.location.reload(); 
            }
        });
    }
}

export function setupSignupListener() {
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            const { data, error } = await supabase.auth.signUp({
                email,
                password,
            });

            if (error) {
                alert('Erro ao cadastrar: ' + error.message);
            } else {
                alert('Cadastro realizado com sucesso! Verifique seu e-mail.');
            }
        });
    }
}

export async function checkAuth() {
    const { data: { session } } = await supabase.auth.getSession();
    return session;
}

export async function logout() {
    await supabase.auth.signOut();
    window.location.reload();
}