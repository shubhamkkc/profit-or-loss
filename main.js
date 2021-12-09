var initialPrice = document.querySelector("#initial-price");
var noOfStocks = document.querySelector("#no-of-stocks");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit");
var outputBox = document.querySelector("#show-output");


function submitHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(noOfStocks.value);
    var curr = Number(currentPrice.value);
  
    calculateProfitAndLoss(ip, qty, curr);
  }
  function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
      var loss = (initial - current) * quantity;
      var lossPercentage = (loss / initial) * 100;
  
      showOutput(
        `Hey, the loss is ${loss} and the percent is ${lossPercentage}%`
      );
    } else if (current > initial) {
      var profit = (current - initial) * quantity;
      var profitPercentage = (profit / initial) * 100;
  
      showOutput(
        `Yeah, the profit is ${profit} and the percent is ${profitPercentage}%`
      );
    } else {
      showOutput(`Paisa hi Paisa Hoga! Sabr kro!`);
    }
  }
  
  function showOutput(message) {
    outputBox.innerHTML = message;
  }
submitBtn.addEventListener("click", submitHandler);
