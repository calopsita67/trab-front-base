const lugares = ["montanha", "praia"]
const mensagem = `
    ---Roteiro de Viagens---
    Lugares: ${lugares}
    ---------------------------`
alert(mensagem)
const escolhaUsuario = prompt('Pra onde deseja viajar: ')

if (!escolhaUsuario) {
  alert("Por favor digite um valor da lista de viagens.")
} else {
  for (const lugar of lugares) {
    if (escolhaUsuario.toLowerCase() == lugar) {
      // alert(lugar)
      window.location.href = `${lugar}.html`
    }
  }
}