const itensCarrinho = document.getElementById('itens-carrinho');
const carrinhoContainer = document.getElementById('carrinho-container');
const totalCarrinho = document.getElementById('total');

let carrinholista = []

function addcarrinho(item) {
    carrinholista.push(item);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    itensCarrinho.innerHTML = '';
    let total = 0;
    carrinholista.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerText = `${item.nome} - ${item.valor}`;
        itensCarrinho.appendChild(itemDiv);
        total += parseFloat(item.valor.replace('R$', '').replace(',', '.').split(' ')[0]);
    });
    totalCarrinho.innerText = `Total: R$${total.toFixed(2).replace('.', ',')}`;
}

document.getElementById('carrinho').addEventListener('click', function() {
    if (carrinhoContainer.style.display === 'none') {
        carrinhoContainer.style.display = 'block';
    } else {
        carrinhoContainer.style.display = 'none';
    }
});
const botoes = document.querySelectorAll('button');
botoes.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        addcarrinho(lista[index]);
        alert(`${lista[index].nome} adicionado ao carrinho!`);
    });
});

