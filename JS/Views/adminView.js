export const adminView = `
<div class="page-frame auth-page admin-page">
    <div class="auth-panel">
        <div class="brand-header">
            <h1>GARAGE <span class="brand-number">66</span></h1>
            <p>Entrar como administrador</p>
        </div>

        <div class="login-card">
            <form id="loginForm" class="form-container">
                <h1>Admin / Entrar</h1>
                <p>Faça o login para acessar o painel de administrador.</p>

                <label>E-mail</label>
                <input type="email" placeholder="Digite seu e-mail" required>

                <label>Senha</label>
                <input type="password" placeholder="Digite sua senha" required>

                <button type="submit" class="btn-login">Entrar</button>
            </form>
        </div>
    </div>
</div>
`;
