const addButton = document.querySelector('.add__btn');
const bugetyType = document.querySelector('.add__type');
const addDescrip = document.querySelector('.add__description');
const addValue = document.querySelector('.add__value');
const addExpenses = document.querySelector('.expenses__list');
const addIncome = document.querySelector('.income__list');
const totalIncome = document.querySelector('.budget__income--value');
const totalExpense = document.querySelector('.budget__expenses--value');
// const delButton = document.querySelectorAll('.item__delete--btn');  original code. this won't work because delete buttons don't exist when the page is loaded 
const choiceItemsIncome = document.querySelectorAll('#income');
const choiceItemsExpense = document.querySelectorAll('#expense');
let incomeId = 0;
let expenseId = 0;
//document.querySelectorAll(`[data-id = '${incomeObject.id}']`)

class Expenses {
    constructor(addDescrip, addValue, totalIncome = 0, totalExpense = 0) {
        this._addDescrip = addDescrip;
        this._addValue = addValue;
        this._totalIncome = totalIncome;
        this._totalExpense = totalExpense;
    }
    get description() {
        return this._addDescrip;
    }
    get value() {
        return this._addValue;
    }

    get totalIncome() {
        if (totalIncome.textContent == "" || totalIncome.textContent === "NaN") {
            totalIncome.textContent = 0;
        }
        this._totalIncome = parseInt(totalIncome.textContent) + parseInt(this._addValue);
        return this._totalIncome;
    }
    get totalExpense() {
        if (totalExpense.textContent == "" || totalExpense.textContent === "NaN") {
            totalExpense.textContent = 0;
        }
        this._totalExpense = parseInt(totalExpense.textContent) + parseInt(this._addValue);
            return this._totalExpense;
    }
}
//document.addEventListener('submit',(e))
addButton.addEventListener('click',(e)=> {
    e.preventDefault();
    const description = addDescrip.value;
    const value = addValue.value;
    if (description !== "" && parseInt(value) !== "" && parseInt(value) >= 0) {
        const myExpenses = new Expenses(description, value);

    // check budget type and set different id's for incomes and expenses
    let idStr = '';
    let idNumber;
    if (bugetyType.value === 'inc') {
        idStr = 'income';
        idNumber = incomeId;
    } else {
        idStr = 'expense';
        idNumber = expenseId;
    }
    let htmlExpenses = 
    `<div class="item clearfix" id="${idStr + idNumber}">
        <div class="item__description">${myExpenses.description}</div>
        <div class="right clearfix">
            <div class="item__value">${myExpenses.value}</div>
            <div class="item__delete">
                <button class="item__delete--btn">
                    <i class="ion-ios-close-outline delete-btn-icon" data-id="${idStr + idNumber}"></i>
                </button>
            </div>
        </div>
    </div>`

        if (bugetyType.value === "inc") {
            addIncome.insertAdjacentHTML("beforeend", htmlExpenses);
            totalIncome.textContent = parseInt(myExpenses.totalIncome);
            incomeId ++;
        } else {
            addExpenses.insertAdjacentHTML("beforeend", htmlExpenses);
            totalExpense.textContent = parseInt(myExpenses.totalExpense);
            expenseId ++;
        }
    }
});

document.body.addEventListener('click',(e)=>{
    // if(e.target.classlist.contain('delButton')){        'delButton' is not a class name! 'contain' should be 'contains'! 'classlist' should be 'classList'! 
    console.log(e.target)
    if(e.target.classList.contains('delete-btn-icon')){  // this is the correct names
        // const itemID = e.target.parentElement.dataset.id;
        const itemID = e.target.dataset.id;      // get the record's id
        // e.target.parentElement.remove();
        const item = document.getElementById(itemID);
        item.parentElement.removeChild(item);
    }
});
