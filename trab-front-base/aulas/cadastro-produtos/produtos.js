const formulario = document.querySelector('#form-user');
const titulo = document.querySelector('#nome');
const desc = document.querySelector('#descricao'); // troque o id no HTML também
const urlimage = document.querySelector('#imagem');
const btnremover = document.querySelector('#remover');
const containerCards = document.querySelector('#container-cards');

const ItemProdutos = [
  // { nome: "Prod1", descricao: "", url: "https://dfaffs" },
  // { nome: "Prod2", descricao: "", url: "https://dfaffs" },
];

// Escutador de evento (submit do formulário)
formulario.addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Funfou!');

  // Aqui você pode pegar os valores dos campos, por exemplo:
  console.log(titulo.value, desc.value, urlimage.value);

  // Depois pode resetar o formulário se quiser:
  // formulario.reset();
});

