let quantidade = document.getElementById('quantidade');
let produto = document.getElementById('produto');
let listaProdutos = document.getElementById('lista-produtos');
let valorTotalElement = document.getElementById('valor-total');
let valorTotal = 0;

function adicionar() {
    let nomeProduto = produto.value.split(' - ')[0];
    let valorProduto = produto.value.split('R$')[1];
    let valorTotalProduto = quantidade.value * valorProduto;

    listaProdutos.innerHTML += `
                    <section class="carrinho__produtos__produto">
                        <span class="texto-azul">${quantidade.value}</span> ${nomeProduto} <span class="texto-azul">R$${valorTotalProduto}</span>
                    </section>`;

    valorTotal += valorTotalProduto;
    valorTotalElement.textContent = `R$${valorTotal}`;

    quantidade.value = '';
}

function limpar() {
    valorTotal = 0;
    listaProdutos.innerHTML = '';
    valorTotalElement.textContent = 'R$0';
}