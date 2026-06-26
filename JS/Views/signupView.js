export const signupView = `
<div class="page-frame auth-page signup-page">
    <div class="auth-panel">
        <div class="brand-header">
            <h1>GARAGE <span class="brand-number">66</span></h1>
            <p>CLÁSSICOS QUE MARCAM</p>
        </div>

        <div class="login-card">
            <h2 class="form-title">Crie sua conta</h2>
            <p class="form-subtitle">Insira seus dados para realizar o cadastro</p>

            <form id="signupForm">
                <label>Nome</label>
                <input type="text" id="name" placeholder="Seu nome" required>

                <label>E-mail</label>
                <input type="email" id="email" placeholder="Seu e-mail" required>

                <label>Senha</label>
                <input type="password" id="password" placeholder="Sua senha" required>

                <label>Repetir Senha</label>
                <input type="password" id="confirmPassword" placeholder="Repita sua senha" required>

                <button type="submit" class="btn-login">Cadastrar →</button>
            </form>

            <p class="form-footer">
                Já tem uma conta? <span id="btnIrLogin">Faça login</span>
            </p>
        </div>
    </div>
</div>
`;
