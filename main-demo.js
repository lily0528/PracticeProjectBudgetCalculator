let income = [];

const calculate = expenses => {
  let incomesTotal = 3

  return expensesTotal => {
    return expensesTotal;
  }
}

const invoke = calculate();
const form = document.getElementById('budget-form');
const amountElement = document.getElementById('amount');
const descriptionElement = document.getElementById('description');
const signElement = document.getElementById('plus-or-minus');
const expenseListElement = document.getElementById('expense-list');
const incomeListElement = document.getElementById('income-list');
const expensesTotalElement = document.getElementById('expenses-total');
const incomesTotalElement = document.getElementById('incomes-total');
const grandTotalElement = document.getElementById('grand-total');

let objectId = 0;
let expenses = [];
let incomes = [];

class Budget {
  constructor(amount, description) {
    this.amount = amount;
    this.description = description;
    this.id = objectId;
    objectId++;
  }

  static sum(arr) {
    return arr.reduce((acc, curr) => {
      return acc + curr.amount;
    }, 0);
  }
}

class Income {
  constructor(amount, description) {
    super(amount, description);
  }
}

class Expense {
  constructor(amount, description) {
    super(amount, description);
    this.percentage; // we'll calculate this.
  }
}

document.body.addEventListener('click', (e) => {
  if(e.target.classList.contains('delete')) {
    const itemID = e.target.parentElement.dataset.id;
    let element = incomes.findIndex( ele => ele.id === Number(itemID));
    
    if(element !== -1) {
      incomes.splice(element, 1)
    } else {
      element = expenses.findIndex( ele => ele.id === Number(itemID));
      expenses.splice(element, 1)
    }
    
    calculateTotals();
    e.target.parentElement.remove();
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let amount = Number(amountElement.value);
  let sign = signElement.value;
  let description = descriptionElement.value;

  if(description !== "" && amount >= 0) {
    if(sign === "-") {
      const expense = new Expense(amount, description);
      expenses.push(expense);
      addItem(expense, expensesTotalElement);
    } else {
      const income = new Income(amount, description)
      incomes.push(income);
      addItem(income, incomesTotalElement);
    }

    calculateTotals();

    document.forms['budget-form'].reset();
  }
});

const addItem = (obj, ele) => {
  ele.insertAdjacentHTML('beforeend', `
    <li data-id="${obj.id}"><span>${obj.description}</span><span>$${obj.amount}</span><span class="delete">X</span></li>
  `);
}

const calculateTotals = () => {
  let expensesTotal = Budget.sum(expenses);
  let incomesTotal = Budget.sum(incomes);

  expensesTotalElement.textContent = expensesTotal;
  incomesTotalElement.textContent = incomesTotal;
  grandTotalElement.textContent = incomesTotal - expensesTotal;
