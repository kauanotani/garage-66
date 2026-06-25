export const loginView = `
    <div id="login-container">
        <h2>Faça Seu Login</h2>
        <form id="loginForm">
            <input type="email" id="email" placeholder="E-mail" required>
            <input type="password" id="password" placeholder="Senha" required>
            <button type="submit">Entrar</button>
        </form>
        <p>Ainda não tem conta? <button id="btnIrCadastro">Cadastre-se aqui</button></p>
    </div>
`;