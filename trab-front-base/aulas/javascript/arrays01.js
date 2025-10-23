/*
  Arrays são agrupadores de valores numéricos, textuais, booleanos, objetos etc.
  Eles são ordenados a partir do índice zero
  Ex: 
    const time = ['Pedro', '22', 'Julio', 'Ana']
    Índices:        0        1      2       3
 */

const vestuario = ['camiseta', 'calça', 'calçado', 'Acessorio', 'Meia', 'Cueca', 'Calcinha/Sutiã']
vestuario[33] = 'Chapeu' // atribuição dinamica
vestuario[4] = 'Regata'

for (let valor of vestuario) {
  console.log(valor)
}

// console.log(vestuario[3])
// console.log(vestuario[1])
// console.log(vestuario[2])
// console.log(vestuario[4])
// console.log(vestuario[5])
// console.log(vestuario[0])
// console.log(vestuario[33])