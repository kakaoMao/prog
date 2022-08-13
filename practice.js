//arrow functions
let sum = (a, b) => a + b

//console.log(` Стрелочная функция ${sum(2, 3)}`)

function ask1(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }

let ask2 = (question, yes, no) => {
    if (confirm(question)) return yes()
    else return no()
}

// ask1(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );



// ladder

let ladder = {
  step: 0,
  up() {
    this.step++;
    console.log(`Current step is:  ${this.step} `);
    return ladder;
  },
  down() {
    this.step--;
    console.log(`Current step is:  ${this.step} `);
    return ladder;
  },
  showStep: function() { // показывает текущую ступеньку
    console.log(`Current step is:  ${this.step} `);
  }
};


// calculator

let calculator = new Calculator();
//calculator.read();

//alert( "Sum=" + calculator.sum() );
//alert( "Mul=" + calculator.mul() );


function Calculator() {

  this.read = function () {
    this.firsNum = +prompt('Enter first number', 1)
    this.secNum = +prompt('Enter second number', 1)
    return this
  }

  this.sum = function () {
    this.result = this.firsNum + this.secNum
    return this.result
  }

  this.mul = function () {
    this.result = this.firsNum * this.secNum
    return this.result
  }
}


// accumulator

let accumulator = new Accumulator(1);

function Accumulator(startingValue) {
  this.value = startingValue
  this.read = function () {
    this.value += +prompt("Enter number")
  }
}


const fst = document.querySelector('button');

