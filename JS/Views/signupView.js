export const signupView = `
    <div id="signup-container">
        <h2>Crie Sua Conta</h2>
        <form id="signupForm">
            <input type="text" id="nome" placeholder="Nome" required>
            <input type="email" id="email" placeholder="E-mail" required>
            <input type="password" id="password" placeholder="Senha" required>
            <input type="password" id="confirmPassword" placeholder="Repetir Senha" required>
            <button type="submit">Cadastrar</button>
        </form>
        <p>Já tem conta? <button id="btnIrLogin">Voltar para Login</button></p>
    </div>
`;