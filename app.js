/*************************************
* Objetivo: calcular os juros compostos
* para empresa Viva moda com comprovante 
* e definir se o cliente vai parcelar em 
* anos ou meses
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
//Nome do cliente
entradaDeDados.question('Digite seu nome: ', function(nome){
    let nomeCliente = nome
    //Nome do produto
    entradaDeDados.question('Digite o nome do produto que você quer: ', function(produto){
        let nomeProduto = produto
        //Valor da compra
        entradaDeDados.question('Digite o valor da compra: ', function(compra){
            let ValorCompra = compra
            //Forma de parcelamento
            entradaDeDados.question('Digite a forma de parcelamento: ', function(parcelamento){
                let formaParcelamento = parcelamento
                //Taxa de juros
                entradaDeDados.question('Digite a taxa de juros: ', function(juros){
                    let valorJuros = juros
                    //Tempo de pagamento
                    entradaDeDados.question('Digite o tempo de pagamento: ', function(pagamento){
                        let tempoPagamento = pagamento
                        //Variável em anos
                        if(formaParcelamento == 'Anos' || formaParcelamento == 'anos'){
                        //Fazendo a multiplicação de anos (1,n) em *12 (meses)
                        let parcelamentoAnos = tempoPagamento * 12
                        //Fazendo a conversão em %
                        let dividindoJuros = (valorJuros / 100)
                        //Calculo do valor completo com o juros
                        let calcularAnos = Number(ValorCompra) * (Number(1 + dividindoJuros)) ** Number(parcelamentoAnos);
                        //Calculo somente o juros 
                        let jurosAnos = calcularAnos - Number(ValorCompra);
                        //Fazendo o comprovante de pagamento em anos (sem formatação definida)
                        console.log(`*****************Viva Moda****************************************** 
                        \nMuito obrigado por realizar a sua compra conosco Sr(a) ${nomeCliente}.
                        \nA compra do produto ${nomeProduto}, tem um valor de: ${ValorCompra}.
                        \nA sua compra será parcelada em ${parcelamentoAnos} vezes e o Sr(a) pagará: ${calcularAnos.toFixed(2)}.
                        \nO acréscimo realizado ao valor de: ${ValorCompra} será de ${jurosAnos.toFixed(2)}.
                        \nMuito obrigado por escolher a Viva Moda.
                        \n**********************************************************************`)}
                        //variável em meses
                        else if(formaParcelamento == 'Meses' || formaParcelamento == 'meses'){
                        //Fazendo a conversão em % 
                        let dividindoJuros = (valorJuros/100)
                        //Calculo do valor completo com o juros
                        let calcularJuros = (Number(ValorCompra) * (Number(1 + dividindoJuros)) ** Number(tempoPagamento))
                        //Calculo somente o juros 
                        let jurosCalculado = (Number(calcularJuros) - Number(ValorCompra))
                        //Fazendo o comprovante de pagamento em meses (sem formatação definida)
                        console.log(`*************************Viva Moda********************************** 
                        \nMuito obrigado por realizar a sua compra conosco Sr(a) ${nomeCliente}.
                        \nA compra do produto ${nomeProduto}, tem um valor de: ${ValorCompra}.
                        \nA sua compra será parcelada em ${tempoPagamento} vezes e o Sr(a) pagará: ${calcularJuros.toFixed(2)}.
                        \nO acréscimo realizado ao valor de: ${ValorCompra} será de ${jurosCalculado.toFixed(2)}.
                        \nMuito obrigado por escolher a Viva Moda.
                        \n**********************************************************************`)}
                        
                        // Tratando erros do usuario
                        // Erro caso o usuario digite algo nulo ou vazio
                        if(nomeCliente == "" || nomeProduto == "" || ValorCompra == "" || formaParcelamento == "" || valorJuros == "" ){
                        console.log('Erro: insira as informações de forma correta!!!')}
                        // Validação de somente números 
                        else if(isNaN(ValorCompra) || isNaN(valorJuros)){
                        console.log('Erro: é permitido somente números')}
                        // Validação de somente letras
                        else if(!isNaN(nomeCliente) || !isNaN(nomeProduto) || isNaN(formaParcelamento)){
                        console.log('Erro: é permitido somente letras!')}
                        // Definindo variável caso o cliente digite as informações incorretas
                        else{
                        console.log('Erro: insira a forma de pagamento com as seguintes formas (Meses) ou (Anos)!!!')
                        }
                    })
                })
            })  
        })
    })
})