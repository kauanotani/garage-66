export const carrosView = `
<div class="page-frame page-content">
    <header class="site-header">
        <div class="container nav-row">
            <div class="brand">GARAGE <span class="brand-number">66</span></div>
            <nav class="main-nav">
                <a href="#" id="navHome">Home</a>
                <a href="#" id="navSobre">Sobre</a>
                <a href="#" id="navColecao" class="active">Coleção</a>
                <a href="#" id="navContato">Contato</a>
            </nav>
            <div class="nav-actions">
                <button id="navAdmin" class="btn-admin">Admin / Entrar</button>
            </div>
        </div>
    </header>

    <main class="page-main container">
        <section class="collection-section">
            <h1>Coleção de Carros</h1>
            <p>Escolha seu clássico preferido e veja os detalhes completos de cada modelo.</p>

            <div class="collection-grid">
                <article class="car-card">
                    <div class="car-card-img car1"></div>
                    <div class="car-card-body">
                        <h2>Jaguar E-Type</h2>
                        <p>Design britânico icônico, motor de alta rotação e dirigibilidade suave.</p>
                        <button class="btn-secondary btn-details" data-car="jaguar">Ver Detalhes</button>
                    </div>
                </article>
                <article class="car-card">
                    <div class="car-card-img car2"></div>
                    <div class="car-card-body">
                        <h2>Aston Martin DB5</h2>
                        <p>Luxo retro com conforto elegante e presença imponente em qualquer estrada.</p>
                        <button class="btn-secondary btn-details" data-car="aston">Ver Detalhes</button>
                    </div>
                </article>
                <article class="car-card">
                    <div class="car-card-img car3"></div>
                    <div class="car-card-body">
                        <h2>Shelby Cobra</h2>
                        <p>Agressividade muscular, aceleração instantânea e visual de pista aberto.</p>
                        <button class="btn-secondary btn-details" data-car="shelby">Ver Detalhes</button>
                    </div>
                </article>
            </div>
        </section>
    </main>
</div>
`;
