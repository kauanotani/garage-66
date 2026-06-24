import { supabase } from '../models/supabaseClient.js';

export function setupLoginListener() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                alert('Erro ao entrar: ' + error.message);
            } else {
                alert('Login realizado com sucesso!');
                console.log('Dados do usuário:', data);
            }
        });
    }
}