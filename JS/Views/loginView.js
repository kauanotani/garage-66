export const loginView = `
<div class="page-frame auth-page login-page">
    <div class="auth-panel">
        <div class="brand-header">
            <h1>GARAGE <span class="brand-number">66</span></h1>
            <p>CLÁSSICOS QUE MARCAM</p>
        </div>

        <div class="login-card">
            <form id="loginForm" class="form-container">
                <h1>Bem-vindo de volta!</h1>
                <p>Entre na sua conta e escolha seu clássico.</p>

                <label>E-mail</label>
                <input type="email" placeholder="Digite seu e-mail" required>

                <label>Senha</label>
                <input type="password" placeholder="Digite sua senha" required>

                <div class="form-footer">
                    <label class="checkbox-container">
                        <input type="checkbox"> Lembrar de mim
                    </label>
                    <a href="#" class="forgot-pass">Esqueceu sua senha?</a>
                </div>

                <button type="submit" class="btn-login">ENTRAR</button>
                
                <p class="register-text">Não tem conta ainda? <a href="#" id="btnIrCadastro">Criar conta</a></p>
            </form>
        </div>
    </div>
</div>
`;
