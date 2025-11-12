const formulario = document.querySelector('#form-user');
const titulo = document.querySelector('#nome');
const desc = document.querySelector('#descricao');
const urlimage = document.querySelector('#imagem');
const btnremover = document.querySelector('#remover');
const containerCards = document.querySelector('#container-cards');

const ItemProdutos = [];

formulario.addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Funfou!');
  const titulo = document.querySelector('#nome');
    const desc = document.querySelector('#descricao');
    const urlimage = document.querySelector('#imagem');

  
  const novoProduto = {
    nome: titulo.value,
    descricao: desc.value,
    url: urlimage.value
  };

  
  ItemProdutos.push(novoProduto);

  console.log(ItemProdutos); 
 
  formulario.reset();

  
});
