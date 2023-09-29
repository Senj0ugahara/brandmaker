window.addEventListener('DOMContentLoaded', function() {
  dopsValueChangeWatcher();
});

const totalPrice = document.querySelector('.form-price__total span');
const dopsInputValues = document.querySelectorAll('.form-dop__count');
const btnRead = document.querySelector('.cabinet-info__btn');

function quantityDops() {
  for (let i = 0; i < dops.length; i++) {
    dops[i].quantity = dopsInputValues[i].value;
  }
}

function totalPriceCounter() {
  for (let i = 0; i < dops.length; i++) {
    dops[i].total = (dops[i].price * +dops[i].quantity);
  }
  let res = dops.reduce((previousValue, currentValue) => previousValue + currentValue.total, 0);
  totalPrice.textContent = res.toLocaleString() + ' руб'
}

totalPriceCounter();

function checkQuantityDops() {
  dops.forEach(dop => {
    if (dop.quantity > 0) {
      document.querySelector('.form-price__none-quantity').style.display = 'none';
      document.querySelector('.form-price__link').style.display = 'block';
      totalPrice.style.display = 'block';
    } else {
      document.querySelector('.form-price__none-quantity').style.display = 'block';
      document.querySelector('.form-price__link').style.display = 'none';
      totalPrice.style.display = 'none';
    }
  })
}

checkQuantityDops();

function dopsValueChangeWatcher() {
  dopsInputValues.forEach(dopInputValue => {
    dopInputValue.addEventListener('change', function() {
      quantityDops();
      totalPriceCounter();
      checkQuantityDops();
    });
  });
}

btnRead.addEventListener('click', () => {
  document.querySelector('.cabinet-info__wrapper').classList.add('view');
  btnRead.style.display = 'none';
});

document.querySelector('.form').addEventListener('submit', e => {
  e.preventDefault();
})