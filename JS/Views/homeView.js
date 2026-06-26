export const homeView = `
<header class="site-header">
    <div class="container nav-row">
        <div class="brand">GARAGE <span class="brand-number">66</span></div>
        <nav class="main-nav">
            <a href="#" id="navHome" class="active">Home</a>
            <a href="#" id="navSobre">Sobre</a>
            <a href="#" id="navColecao">Coleção</a>
            <a href="#" id="navContato">Contato</a>
        </nav>
        <div class="nav-actions">
            <button id="navAdmin" class="btn-admin">Admin / Entrar</button>
        </div>
    </div>
</header>

<main class="home-main container">
    <section class="hero">
        <small class="kicker">CLÁSSICOS QUE MARCAM</r
        ></small>
        <h1 class="hero-title">A MAIOR LOCADORA DE<br/>CARROS CLÁSSICOS DO BRASIL.</h1>
        <p class="hero-cta"><button id="btnVerCatalogo" class="btn-primary">VER CATÁLOGO</button></p>
    </section>

    <section class="models">
        <h2 class="section-title">MODELOS EM DESTAQUE</h2>
        <div class="cards">
            <article class="card">
                <div class="card-img car1"></div>
                <h3>Jaguar E-Type</h3>
                <button class="btn-ghost btn-details" data-car="jaguar">Ver Detalhes →</button>
            </article>
            <article class="card">
                <div class="card-img car2"></div>
                <h3>Aston Martin DB5</h3>
                <button class="btn-ghost btn-details" data-car="aston">Ver Detalhes →</button>
            </article>
            <article class="card">
                <div class="card-img car3"></div>
                <h3>Shelby Cobra</h3>
                <button class="btn-ghost btn-details" data-car="shelby">Ver Detalhes →</button>
            </article>
        </div>
    </section>
</main>

<footer class="site-footer">
    <div class="container footer-row">
        <div class="address">Av. Alfredo Nasser, 66 - Luziânia<br/>Luziânia - GO, 72900-000</div>
        <div class="socials"> 
            <a href="#">Instagram</a> • <a href="#">WhatsApp</a>
        </div>
        <div class="copyright">© 2026 Garage 66. Todos os direitos reservados.</div>
    </div>
</footer>
`;
