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
            <div class="collection-top">
                <div>
                    <p class="collection-label">Veículos disponíveis</p>
                </div>
                <a href="#" class="browse-all">Ver todos →</a>
            </div>

            <div class="collection-grid">
                <article class="car-card">
                    <div class="car-card-figure">
                        <span class="car-card-badge">Novidade</span>
                        <div class="car-card-img car-m5"></div>
                    </div>
                    <div class="car-card-meta">
                        <h2>2011 BMW M5</h2>
                        <p class="car-location">Brasília, Distrito Federal</p>
                        <p class="car-price">R$ 3.500,00/dia</p>
                    </div>
                    <div class="car-card-body">
                        <h3>O que este carro oferece</h3>
                        <ul class="car-specs">
                            <li><strong>Transmissão:</strong> automática</li>
                            <li><strong>Tipo de combustível:</strong> Gasolina</li>
                            <li><strong>Lugares:</strong> 4</li>
                            <li><strong>Estilo da carroceria:</strong> Sedan</li>
                            <li><strong>Cor:</strong> Prata</li>
                            <li><strong>Classificação:</strong> Luxo</li>
                            <li><strong>Rodas e pneus:</strong> rodas de liga leve de 19 polegadas</li>
                            <li><strong>Freios:</strong> Freios a disco nas 4 rodas</li>
                            <li><strong>Lado da direção:</strong> Direção à esquerda</li>
                            <li><strong>Conversível:</strong> Não</li>
                            <li><strong>Cintos de segurança:</strong> Sim</li>
                            <li><strong>País de origem:</strong> Alemanha</li>
                            <li><strong>Era:</strong> Década de 2010</li>
                        </ul>
                    </div>
                </article>

                <article class="car-card">
                    <div class="car-card-figure">
                        <span class="car-card-badge">Standout</span>
                        <div class="car-card-img car-c320"></div>
                    </div>
                    <div class="car-card-meta">
                        <h2>Mercedes-Benz C320 V6 2002</h2>
                        <p class="car-location">Brasília, Distrito Federal</p>
                        <p class="car-price">R$ 1.850,00/dia</p>
                    </div>
                    <div class="car-card-body">
                        <h3>O que este carro oferece</h3>
                        <ul class="car-specs">
                            <li><strong>Motor:</strong> 3.2L V6</li>
                            <li><strong>Transmissão:</strong> automática</li>
                            <li><strong>Tipo de combustível:</strong> Gasolina</li>
                            <li><strong>Lugares:</strong> 5</li>
                            <li><strong>Estilo da carroceria:</strong> Sedan</li>
                            <li><strong>Cor:</strong> Preto</li>
                            <li><strong>Classificação:</strong> Luxo</li>
                            <li><strong>Rodas e pneus:</strong> rodas de liga leve de 16 polegadas</li>
                            <li><strong>Freios:</strong> Freios a disco nas 4 rodas</li>
                            <li><strong>Lado da direção:</strong> Direção à esquerda</li>
                            <li><strong>Conversível:</strong> Não</li>
                            <li><strong>Cintos de segurança:</strong> Sim</li>
                            <li><strong>País de origem:</strong> Bélgica</li>
                            <li><strong>Era:</strong> anos 2000</li>
                        </ul>
                    </div>
                </article>
            </div>
        </section>
    </main>
</div>
`;
