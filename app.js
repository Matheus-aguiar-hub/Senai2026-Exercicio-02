/*************************************
* Objetivo: calcular os juros compostos
* 
* Data: 04/02/2026
* Autor: Matheus
* Versão 1.0
*************************************/


//Importação da biblioteca
const readline = require ('readline')

//Cria objeto para entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite seu nome: ', function(nome){
    let nomeCliente = nome

    entradaDeDados.question('Digite o nome do produto que você quer: ', function(produto){
        let nomeProduto = produto
        
        entradaDeDados.question('Digite o valor da compra: ', function(compra){
            let ValorCompra = compra
        
            entradaDeDados.question('Digite a taxa de juros: ', function(juros){
                let valorJuros = juros

                entradaDeDados.question('Digite o tempo de pagamento (Mêses ou anos): ', function(pagamento){
                    let tempoPagamento = pagamento
                    
                    let dividindoJuros = (valorJuros/100) 
                    let calcularJuros = (Number(ValorCompra) * (Number(1 + dividindoJuros)) ** Number(tempoPagamento) )
                    let jurosCalculado = (Number(calcularJuros) - Number(ValorCompra))
                    console.log(`*****************Viva Moda***************** 
                    \nMuito obrigado por realizar a sua compra conosco Sr(a) ${nomeCliente}.
                    \nA compra do produto ${nomeProduto}, tem um valor de: ${ValorCompra}.
                    \nA sua compra será parcelada em ${tempoPagamento} vezes e o Sr(a) pagará: ${calcularJuros.toFixed(3)}.
                    \nO acréscimo realizado ao valor de: ${ValorCompra} será de ${jurosCalculado.toFixed(3)}.
                    \nMuito obrigado por escolher a Viva Moda.
                    \n*******************************************`)

                })
            })
        })
    })
})

