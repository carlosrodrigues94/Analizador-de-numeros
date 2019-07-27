var Arr = []
var divResul1 = document.getElementById('divResul1')
var divResul2 = document.getElementById('divResul2')
var divResul3 = document.getElementById('divResul3')
var divResul4 = document.getElementById('divResul4')
var divResul5 = document.getElementById('divResul5')
var divResul6 = document.getElementById('divResul6')
var textarea = document.getElementById('textarea')
var botao = document.getElementById('botao')

function adicionar() {

    var numero = Number(document.getElementById('boxNumber').value) //pega apenas o valor númerico e insere na var

    if (numero > 100) {
        window.alert('O número digitado é maior que 100!')
        var limpa = document.getElementById('boxNumber').value = ""

    } if (numero < 1) {
        window.alert('Por favor digite um numero Inteiro de 1 a 100')
        var limpa = document.getElementById('boxNumber').value = ""

    } if (Arr.indexOf(numero) != -1) {
        window.alert("Esse número já foi adicionado")
        var limpa = document.getElementById('boxNumber').value = ""
    

    } if (numero < 1 || numero > 100 || Arr.indexOf(numero) != -1) {

        
    } else {
        textarea.innerHTML += `O número ${numero} foi adicionado \n`
        Arr.push(numero)
        var limpa = document.getElementById('boxNumber').value = ""
    }


} //fecha a funcao clicou

function finalizar() {

    Arr.sort()
    const reducer = (accumulator, currentValue) => accumulator + currentValue;


    const valorTotal = (Arr.reduce(reducer));
    const media = (valorTotal / Arr.length)

    divResul1.innerText = `Ao todo você digitou ${Arr.length} valores`
    divResul2.innerText = `O maior valor digitado é: ${Arr[Arr.length - 1]}`
    divResul3.innerText = `O menor valor digitado é: ${Arr[0]}`
    divResul4.innerText = `A soma de todos os valores é: ${valorTotal}`
    divResul5.innerText = `A média dos valores digitados é: ${media}`


} // fecha funcao final




    


