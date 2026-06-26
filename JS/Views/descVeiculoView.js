const vehicleData = {
    jaguar: {
        name: 'Jaguar E-Type',
        year: '1964',
        engine: '3.8L Inline-6',
        horsepower: '265 cv',
        transmission: 'Manual 4 marchas',
        description: 'O Jaguar E-Type é um ícone britânico que combina curvas elegantes, motor potentes e comportamento de estrada superior. Um clássico de carroceria longilínea e faróis embutidos que marcou a década de 1960.',
        features: ['Design atemporal', 'Interior em couro original', 'Suspensão independente', 'Farois retráteis'],
        imageClass: 'car1'
    },
    aston: {
        name: 'Aston Martin DB5',
        year: '1965',
        engine: '4.0L Inline-6',
        horsepower: '282 cv',
        transmission: 'Manual 5 marchas',
        description: 'O Aston Martin DB5 é a definição de sofisticação automotiva. Com acabamento artesanal, linhas suaves e uma presença luxuosa, ele se tornou famoso também nas telas de cinema.',
        features: ['Interior em madeira nobre', 'Acabamento cromado', 'Ar condicionado', 'Histórico restaurado'],
        imageClass: 'car2'
    },
    shelby: {
        name: 'Shelby Cobra',
        year: '1967',
        engine: '4.7L V8',
        horsepower: '330 cv',
        transmission: 'Manual 4 marchas',
        description: 'O Shelby Cobra é pura emoção em forma de esportivo. Carroceria leve e motor V8 explosivo entregam aceleração intensa e atitude de pista em cada curva.',
        features: ['Motor V8 aspirado', 'Chassi tubular reforçado', 'Exaustão esportiva', 'Aceleração brutal'],
        imageClass: 'car3'
    }
};

export function descVeiculoView(carId) {
    const vehicle = vehicleData[carId] || vehicleData.jaguar;
    return `
<div class="page-frame page-content">
    <header class="site-header">
        <div class="container nav-row">
            <div class="brand">GARAGE <span class="brand-number">66</span></div>
            <nav class="main-nav">
                <a href="#" id="navHome">Home</a>
                <a href="#" id="navSobre">Sobre</a>
                <a href="#" id="navColecao">Coleção</a>
                <a href="#" id="navContato">Contato</a>
            </nav>
            <div class="nav-actions">
                <button id="navAdmin" class="btn-admin">Admin / Entrar</button>
            </div>
        </div>
    </header>

    <main class="page-main container detail-page">
        <section class="detail-hero">
            <div class="detail-image ${vehicle.imageClass}"></div>
            <div class="detail-copy">
                <span class="detail-tag">Detalhes do veículo</span>
                <h1>${vehicle.name}</h1>
                <p>${vehicle.description}</p>
                <div class="detail-meta">
                    <span><strong>Ano:</strong> ${vehicle.year}</span>
                    <span><strong>Motor:</strong> ${vehicle.engine}</span>
                    <span><strong>Potência:</strong> ${vehicle.horsepower}</span>
                </div>
                <button id="btnBackToCollection" class="btn-secondary">Voltar à coleção</button>
            </div>
        </section>

        <section class="detail-specs">
            <h2>Especificações</h2>
            <div class="spec-grid">
                <div class="spec-card"><strong>Transmissão</strong><span>${vehicle.transmission}</span></div>
                <div class="spec-card"><strong>Motor</strong><span>${vehicle.engine}</span></div>
                <div class="spec-card"><strong>Horsepower</strong><span>${vehicle.horsepower}</span></div>
                <div class="spec-card"><strong>Ano</strong><span>${vehicle.year}</span></div>
            </div>
            <div class="feature-list">
                <h3>Destaques</h3>
                <ul>
                    ${vehicle.features.map((feature) => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
        </section>
    </main>
</div>
`;
}
