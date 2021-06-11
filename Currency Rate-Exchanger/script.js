let currencyCR_one=document.querySelector("#currency-one");
let amountCR_one=document.querySelector("#amount-one");
let currencyCR_two=document.querySelector("#currency-two");
let amountCR_two=document.querySelector("#amount-two");


let rateCR=document.querySelector("#rate");
let swap=document.querySelector("#swap");

async function calculate() {
    const currency_one=currencyCR_one.value;
    const currency_two=currencyCR_two.value;
    // console.log(currency_one,currency_two);
    //console.log(amountCR_two);
    const response=await fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`);
    const data=await response.json();
    //console.log(data);

    const rate=data.rates[currency_two];
   
    rateCR.innerHTML=`1 ${currency_one}= ${rate} ${currency_two}`;
    amountCR_two.value=(amountCR_one.value * rate).toFixed(2);
}

currencyCR_one.addEventListener("change",calculate);
amountCR_one.addEventListener("input",calculate);
currencyCR_two.addEventListener("change",calculate);
amountCR_one.addEventListener("input",calculate);
rateCR.addEventListener("change",calculate);

swap.addEventListener("click",function(){
    const temp=currencyCR_one.value;
    currencyCR_one.value=currencyCR_two.value;
    currencyCR_two.value=temp;
    calculate();
});


