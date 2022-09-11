// let first = document.getElementsByClassName('item_enteredNumbers');

// console.log(first);
// console.log((first)[0].innerText);


let calculator = {
    
    actualNumber : '',
    actualCalc : '',
    result : 0,
    actualBtn : '+',

    numInput (num) {
        this.actualNumber += num;
        this.actualCalc += num;
        this.drawing('item_enteredNumbers', this.actualCalc);
        this.calculating();
    },

    btnInput (btn) {
        this.actualBtn = btn;
        this.actualCalc += btn;
        this.actualNumber = '';      
        this.drawing('item_enteredNumbers', this.actualCalc);
    },

    calculate () {
        document.getElementsByClassName('item_result')[0].innerText = this.result;
    },

    calculating () {
        if (this.actualBtn == '+') { this.result = this.result + Number(this.actualNumber); }

            else if (this.actualBtn == '-') { this.result = this.result - Number(this.actualNumber); }

            else if (this.actualBtn  == '*') { this.result = this.result * Number(this.prevNumber); }

            else if (this.actualBtn  == '/') { this.result = this.result / Number(this.prevNumber); }

            else if (this.actualBtn  == '**') { this.result = this.result ** Number(this.prevNumber); }
    },

    drawing (className, item) {
        document.getElementsByClassName(className)[0].innerText = item;
    }

};


