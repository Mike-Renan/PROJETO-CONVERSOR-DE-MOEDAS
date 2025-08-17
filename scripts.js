const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValue(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") // Valor convertido


   console.log(currencySelect.value) // Verifica o valor selecionado no select
   const dollarToday = 5.40 // Valor do dólar hoje
   const euroToday = 6.20 // Valor do euro hoje
   const libraToday = 7.00 // Valor da libra hoje
   const bitcoinToday = 200000 // Valor do bitcoin hoje


   
  
   if(currencySelect.value == "dollar"){
       currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(inputCurrencyValue) // Formata o valor em Real
       currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(inputCurrencyValue/dollarToday) // Formata o valor convertido para Dólar
   }

   if(currencySelect.value == "euro"){
        
         currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(inputCurrencyValue) // Formata o valor em Real
         currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'EUR'}).format(inputCurrencyValue/euroToday) // Formata o valor convertido para Euro 
   }

   if(currencySelect.value == "libra"){
         
         currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(inputCurrencyValue) // Formata o valor em Real
         currencyValueConverted.innerHTML = new Intl.NumberFormat('en-GB', {style: 'currency', currency: 'GBP'}).format(inputCurrencyValue/libraToday) // Formata o valor convertido para Libra
       
   }

   if(currencySelect.value == "bitcoin"){
           
            currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(inputCurrencyValue) // Formata o valor em Real
            currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(inputCurrencyValue/bitcoinToday) // Formata o valor convertido para Dólar
            return
    }
}
 function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if(currencySelect.value == "dollar"){
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/dollar.png"
    }
    if(currencySelect.value == "euro"){ 
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }
    if(currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra-1.png"
    }
    if(currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin-1.png"
    }
    

    convertValue() // Chama a função para converter o valor inicial
 }     
   



currencySelect.addEventListener("change" , changeCurrency)
convertButton.addEventListener("click", convertValue )