// 1 - Obrigatoriamente crie um For loop que rode e imprime o valor de 0 até 50
// 2 - Apenas valores ímpares devem ser imprimidos Ex. 1, 3, 5, 7, 9, 11, 13, 15
// 3 - O For Loop é um laço de repetição
// 4 - Ele deve ter um "contador"
// 5 - A cada "iteração" ele deve incrementar o contador caso seja correta a condição

for (let contador = 0; contador <= 50; contador++) {
  if (contador % 2 !== 0) {
    console.log(contador);
  }
}
