const StockPrice = document.querySelector("#intial-price");
const StockQuantity = document.querySelector("#stock-quantity");
const CurrentPrice = document.querySelector("#current-price");
const Stockbtn = document.querySelector("#stock-btn");
const Outputvalue = document.querySelector("#output");

function profitorloss(){
    
    const CP = (Number(StockPrice.value)*Number(StockQuantity.value));
    const SP = (Number(CurrentPrice.value)*Number(StockQuantity.value));
    if(SP > CP){
        const profit = (SP-CP);
        const profitpercentage = ((profit)*100/CP);
        Outputvalue.innerText = `Congratulations 🍻 , You have made a Profit of Rs ${profit} and The Profit Percent is ${profitpercentage}%`;
    }
    else if(SP === CP){
        Outputvalue.innerText = "You have made neither a profit nor a loss !!";
    }
    else{
        const loss = (CP-SP);
        const losspercentage = ((loss)*100/CP);
        Outputvalue.innerText = `You have made a loss of Rs ${loss} and The Loss Percent is ${losspercentage}%`;
    }
}




Stockbtn.addEventListener("click" , profitorloss)
