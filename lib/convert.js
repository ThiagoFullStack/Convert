const convert = (cotacao, quantidade) => cotacao * quantidades
const toMoney = valor => parseFloat(valor).toFixed(2)
module.exports = {
  convert,
  toMoney
}
  // parseInt transforma os números em inteiros.
  //  parseFloat transforma os números em decimal. 
  // Você pode testar abrindo o console no navegador e digitando:
  // parseInt(1.5)
  // parseFloat(1.5)

