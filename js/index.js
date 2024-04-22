// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(".price span");
  const quantity =product.querySelector(".quantity input ");

  const priceValue = parseFloat(price.innerHTML);
  const quantityValue = parseFloat(quantity.value);

  const calculoSubTotal = priceValue * quantityValue;
  const formateoSubtotal = calculoSubTotal.toFixed(2);

  const subtotal = product.querySelector(".subtotal span");
  subtotal.innerHTML = formateoSubtotal ;

  return calculoSubTotal;

  
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // // end of test
  
  // ITERATION 2
  //... your code goes here
  const calcular = document.querySelectorAll(".product");
  let total = 0;

  for (let i = 0; i < calcular.length; i++){
    total += updateSubtotal(calcular[i]);
  }

  // ITERATION 3
  //... your code goes here

  const totalPrecio = document.querySelector("#total-value span");
  totalPrecio.innerHTML = total.toFixed(2);
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const button = event.currentTarget;
  const productContainer = button.closest(".product");
  if (productContainer){
    productContainer.parentNode.removeChild(productContainer);
  }
  calculateAll();
}

// ITERATION 5
const botonCrearProducto = document.querySelector('#create');
botonCrearProducto.addEventListener('click', createProduct);

function createProduct() {
  const productNameInput = document.querySelector('.create-product input[type="text"]');
  const productPriceInput = document.querySelector('.create-product input[type="number"]');

  const productNameValue = productNameInput.value;
  const productPriceValue = productPriceInput.value;

  const tfoot = document.querySelector('#cart tfoot');
  const newProductRow = tfoot.insertRow(0);
  newProductRow.classList.add('product');
  newProductRow.innerHTML = `
    <td class="name"><span>${productNameValue}</span></td>
    <td class="price">$<span>${productPriceValue}</span></td>
    <td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action"><button class="btn btn-remove">Remove</button></td>
  `;

  productNameInput.value = '';
  productPriceInput.value = '';

  const removeButton = newProductRow.querySelector('.btn-remove');
  removeButton.addEventListener('click', function() {
    newProductRow.remove();
  });
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const buttons = document.querySelectorAll(".btn.btn-remove");
  for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click',removeProduct);
  };
});
