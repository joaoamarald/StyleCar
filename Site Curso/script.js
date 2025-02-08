let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let items = container.querySelectorAll('.list .item');
let indicadores = document.querySelector('.indicadores');
let dots = indicadores.querySelectorAll('ul li');

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;

// Função para atualizar os indicadores (pontos)
const updateIndicators = () => {
    dots.forEach((dot, index) => {
        dot.classList.remove('ativo');
        if (index === active) {
            dot.classList.add('ativo');
        }
    });

    // Atualiza o número ao lado dos indicadores
    let numberIndicator = indicadores.querySelector('.numero');
    numberIndicator.textContent = ('0' + (active + 1)).slice(-2);
}

nextButton.onclick = () => {
    let itemOld = container.querySelector('.list .item.active');
    itemOld.classList.remove('active');

    active = active + 1 > lastPosition ? 0 : active + 1;
    items[active].classList.add('active');

    updateIndicators();  // Atualiza o indicador (ponto) ativo
}

prevButton.onclick = () => {
    let itemOld = container.querySelector('.list .item.active');
    itemOld.classList.remove('active');

    active = active - 1 < firstPosition ? lastPosition : active - 1;
    items[active].classList.add('active');

    updateIndicators();  // Atualiza o indicador (ponto) ativo
}

// Inicializa os indicadores na primeira carga
updateIndicators();
