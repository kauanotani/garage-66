export const contatoView = `
<div class="page-frame page-content">
    <header class="site-header">
        <div class="container nav-row">
            <div class="brand">GARAGE <span class="brand-number">66</span></div>
            <nav class="main-nav">
                <a href="#" id="navHome">Home</a>
                <a href="#" id="navSobre">Sobre</a>
                <a href="#" id="navColecao">Coleção</a>
                <a href="#" id="navContato" class="active">Contato</a>
            </nav>
            <div class="nav-actions">
                <button id="navAdmin" class="btn-admin">Admin / Entrar</button>
            </div>
        </div>
    </header>

    <main class="page-main container">
        <section class="contact-section">
            <h1>Fale com a Garage 66</h1>
            <p>Personalize sua reserva, solicite uma visita ou peça informações sobre nossos modelos.</p>

            <div class="contact-grid">
                <form class="contact-form">
                    <label>Nome</label>
                    <input type="text" placeholder="Seu nome" required>

                    <label>E-mail</label>
                    <input type="email" placeholder="Seu e-mail" required>

                    <label>Mensagem</label>
                    <textarea rows="6" placeholder="Como podemos ajudar?" required></textarea>

                    <button type="submit" class="btn-primary">Enviar mensagem</button>
                </form>

                <div class="contact-info">
                    <div class="info-card">
                        <h2>Endereço</h2>
                        <p>Av. Alfredo Nasser</p>
                        <p>Luziânia - GO, 72900-000</p>
                    </div>
                    <div class="info-card">
                        <h2>Telefone</h2>
                        <p>(61) 99680-7260</p>
                    </div>
                    <div class="info-card">
                        <h2>E-mail</h2>
                        <p>contato@garage66.com.br</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
</div>
`;
