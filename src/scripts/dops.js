const dops = [
  {
    index: '1',
    name:  'Стол руководителя',
    price: 27900,
    quantity: 0,
    total: null
  },
  {
    index: '2',
    name:  'Брифинг-приставка',
    price: 14600,
    quantity: 0,
    total: null
  },
  {
    index: '3',
    name:  'Тумба с ящиками',
    price: 10500,
    quantity: 0,
    total: null
  },
  {
    index: '4',
    name:  'Шкаф для одежды',
    price: 55000,
    quantity: 0,
    total: null
  },
  {
    index: '5',
    name:  'Кресло руководителя',
    price: 43800,
    quantity: 0,
    total: null
  },
  {
    index: '6',
    name:  'Кресло посетителя',
    price: 13500,
    quantity: 0,
    total: null
  }
];

function parseDopInHtml() {
  for (let i = 0; i < dops.length; i++) {
    document.querySelector('.form-dops').innerHTML += `
      <div class="form-dop">
        <div class="form-dop__index">
          <span>${dops[i].index}</span>
        </div>
        <div class="form-dop__name">${dops[i].name}</div>
        <div class="form-dop__price">
          от
          <span>${dops[i].price.toLocaleString()}</span>
          руб
        </div>
        <input class="form-dop__count" type="number" min="0" max="99" value="${dops[i].quantity}">
      </div>
    `
  }
}

parseDopInHtml();