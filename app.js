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
                    let calcularJuros = (Number(ValorCompra) * (Number(1 + dividindoJuros)) / Number(tempoPagamento) )
                    console.log('O valor é: ' + calcularJuros)
                })
            })
        })
    })
})

