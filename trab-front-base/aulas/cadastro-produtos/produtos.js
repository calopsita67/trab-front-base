const formulario = document.querySelector('#form-user');
const titulo = document.querySelector('#nome');
const desc = document.querySelector('#descricao');
const urlimage = document.querySelector('#imagem');
const btnremover = document.querySelector('#remover');
const containerCards = document.querySelector('#container-cards');

let ItemProdutos = [];

//  1 – RECEBER DADOS DO FORMULÁRIO
formulario.addEventListener('submit', function(event) {
  event.preventDefault();

  const novoProduto = {
    nome: titulo.value,
    descricao: desc.value,
    url: urlimage.value
  };

  //  2 – ARMAZENAR EM ARRAY
  ItemProdutos.push(novoProduto);

  //  3 – RENDERIZAR OS CARDS NA TELA
  renderizarCards();

  formulario.reset();
});

// 5 – REMOVER ÚLTIMO ITEM DO ARRAY E ATUALIZAR A TELA
btnremover.addEventListener('click', function() {
  ItemProdutos.pop();  
  renderizarCards();  // Atualiza a tela
});

//  Função para criar e exibir todos os cards
function renderizarCards() {
  containerCards.innerHTML = ""; // Limpa antes de renderizar novamente

  ItemProdutos.forEach(produto => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <img src="${produto.url}" alt="${produto.nome}">
      <h3>${produto.nome}</h3>
      <p>${produto.descricao}</p>
    `;

    containerCards.appendChild(card);
  });
}
