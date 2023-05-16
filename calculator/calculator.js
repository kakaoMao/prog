// let first = document.getElementsByClassName('item_enteredNumbers');

// console.log(first);
// console.log((first)[0].innerText);

const numberFinished = Symbol('numberFinished')

let calculator = {
    
    actualNumber : '',
    actualCalc : '',
    result : 0,
    actualBtn : '',
    //[numberFinished]: false,

    numInput (num) {
        this.actualNumber += num;
        this.actualCalc += num;
        this.drawing('item_enteredNumbers', this.actualCalc);
        this.calculating();
    },

    btnInput (btn) {
        //this[numberFinished] = true
        this.actualBtn = btn;
        this.actualCalc += btn;
        this.result = this.actualNumber;
        this.actualNumber = '';      
        this.drawing('item_enteredNumbers', this.actualCalc);
        this.logging();
    },

    calculate () {
        document.getElementsByClassName('item_result')[0].innerText = this.result;
    },

    calculating () {
        console.log('hey, start calculating')
        if (this.actualBtn == '+' && this[numberFinished] == true) {
            console.log('hey its + symbol start summing')
            this.result = +this.result + +this.actualNumber
        }
        this.logging()
        // if (this.actualBtn == '+') { this.result = this.result + Number(this.actualNumber); }

        //     else if (this.actualBtn == '-') { this.result = this.result - Number(this.actualNumber); }

        //     else if (this.actualBtn  == '*') { this.result = this.result * Number(this.prevNumber); }

        //     else if (this.actualBtn  == '/') { this.result = this.result / Number(this.prevNumber); }

        //     else if (this.actualBtn  == '**') { this.result = this.result ** Number(this.prevNumber); }
    },

    drawing (className, item) {
        document.getElementsByClassName(className)[0].innerText = item;
    },

    logging () {
        console.log(`----- Start logging -----`)
        console.log(`Actual number: ${this.actualNumber}`)
        console.log(`Actual button: ${this.actualBtn}`)
        console.log(`Result: ${this.result}`)
        console.log(`----- End logging -----`)
    }

};