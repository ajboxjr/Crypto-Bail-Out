
/*
  DOM ELEMENTS
*/
body = document.getElementById('main_body');

var modal = document.createElement('div');
modal.classList.add('projection-modal')
modal.style.cssText = 'width:250px; height:30px; position: absolute; bottom:0; right: 0; background-color: #4C6085;'

modalTitle = document.createElement('h1')
modalTitle.innerText = 'Enter Buy Fields'
modalTitle.style.cssText = 'font-size: 1.5em; text-align:center; color:white; margin: 0; padding-bottom:.3em; margin-top: .4em'

modalTotal = document.createElement('h3')
modalTotal.innerText = 'Enter Order Info'
modalTotal.style.cssText = 'font-size: 1.3em; text-align: right; color: white;'

modal.appendChild(modalTitle)
modal.appendChild(modalTotal)
body.appendChild(modal)

buyForm = document.getElementById('trade_buy')

buyInputs  = [
  buyForm.querySelector('input[name=quantity_Buy]'),
  buyForm.querySelector('input[name=price_Buy]'),
  buyForm.querySelector('input[name=total_Buy]')
]

buyButtons = [
  document.getElementById('max_buy'), // Max Buy Button
  ...document.querySelectorAll('#menu_PriceBuy li') //Bid dropdown
]

// TODO: FILL buy form with minimal profit return
buyForm = document.getElementById('trade_sell')

sellInputs = [
  buyForm.querySelector('input[name=quantity_Sell]'),
  buyForm.querySelector('input[name=price_Sell]'),
  buyForm.querySelector('input[name=total_Sell]')
]


/*
  Return sell price for cost return
*/
function calculateProfitMargin(quantity, total){
  return (total/.9975/quantity).toFixed(7)
}

/*
  Return boolean whether buy inputs are filled
*/
function entriesFilled(){
  return buyInputs.every((x) => parseFloat(x.value) > 0)
}

/*
  Handle price return
*/
function getProfitMargin(){
  if(entriesFilled()){
    // buyInputs.forEach(x => console.log(x.value))
    let sellAt = calculateProfitMargin(parseFloat(buyInputs[0].value), parseFloat(buyInputs[2].value))
    modalTitle.innerText = `Cuttoff: ${sellAt}`
  }
}


/*
  Events
*/
Array.from(buyInputs).forEach(function(input){
  input.addEventListener('change', getProfitMargin)
})

Array.from(buyButtons).forEach(function(buyButton){
  buyButton.addEventListener('click', getProfitMargin)
})
