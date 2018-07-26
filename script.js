
/*
  DOM ELEMENTS
*/
var body = document.getElementById('main_body');

var modal = document.createElement('div');
modal.classList.add('projection-modal')
modal.style.cssText = 'width:250px; height:30px; position: absolute; bottom:0; right: 0; background-color: #4C6085;'

var modalTitle = document.createElement('h1')
modalTitle.innerText = 'Enter Buy Fields'
modalTitle.style.cssText = 'font-size: 1.5em; text-align:center; color:white; margin: 0; padding-bottom:.3em; margin-top: .4em'

var modalTotal = document.createElement('h3')
modalTotal.innerText = 'Enter Order Info'
modalTotal.style.cssText = 'font-size: 1.3em; text-align: right; color: white;'

modal.appendChild(modalTitle)
modal.appendChild(modalTotal)
body.appendChild(modal)

var buyForm = document.getElementById('trade_buy')

var buyInputs  = [
  buyForm.querySelector('input[name=quantity_Buy]'),
  buyForm.querySelector('input[name=price_Buy]'),
  buyForm.querySelector('input[name=total_Buy]')
]

var buyButtons = [
  document.getElementById('max_buy'), // Max Buy Button
  ...document.querySelectorAll('#menu_PriceBuy li') //Bid dropdown
]

// TODO: FILL buy form with minimal profit return
var buyForm = document.getElementById('trade_sell')

var sellInputs = [
  buyForm.querySelector('input[name=quantity_Sell]'),
  buyForm.querySelector('input[name=price_Sell]'),
  buyForm.querySelector('input[name=total_Sell]')
]

/*
  Return sell price for cost return
*/
function calculateProfitMargin(quantity, total){
  return (total/.9975/quantity).toFixed(8)
}

/*
  Return boolean whether buy inputs are filled
*/
function entriesFilled(){
  return buyInputs.every((x) => parseFloat(x.value) > 0)
}

/*
   TODO: Handle price return

function getProfitMargin(){
  if(entriesFilled()){
    // buyInputs.forEach(x => console.log(x.value))
    let sellAt = calculateProfitMargin(parseFloat(buyInputs[0].value), parseFloat(buyInputs[2].value))
    modalTitle.innerText = `Cuttoff: ${sellAt}`
    var sellOrders = document.querySelectorAll('#sellOrdersTable .dyn-tr-add'); //Sell Order Book
    sellOrders.forEach((order) => console.log(order.innerHTML))
    // sellOrders.forEach((order)=> order.style.backgroundColor = "red")
  }
}

*/


/*
  Events
*/
Array.from(buyInputs).forEach(function(input){
  input.addEventListener('change', getProfitMargin)
})

Array.from(buyButtons).forEach(function(buyButton){
  buyButton.addEventListener('click', getProfitMargin)
})
