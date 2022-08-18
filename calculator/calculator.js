let first = document.getElementsByClassName('item_enteredNumbers')

console.log(first)
console.log((first)[0].innerText)


let calculator = { 

    actualNumber : '',
    actualCalc : '',
    prevNumber : 0,

    numInput (num) {
        this.actualNumber += num
        this.actualCalc += num
        document.getElementsByClassName('item_enteredNumbers')[0].innerText = this.actualCalc
    },

    btnInput (btn) {
        this.actualBtn = btn
        this.actualCalc += btn
        document.getElementsByClassName('item_enteredNumbers')[0].innerText = this.actualCalc
        
        if (btn == '+') {
            this.result = +this.actualNumber + +this.prevNumber
            //console.log(`${firstNum} + ${secNum} = ${result}`)
        }
        else if (btn == '-') {
            result = +firstNum - +secNum
            //console.log(`${firstNum} + ${secNum} = ${result}`)
        }
        else if (btn == '*') {
            result = +firstNum * +secNum
            //console.log(`${firstNum} * ${secNum} = ${result}`)
        }
        else if (btn == '/') {
            result = +firstNum / +secNum
            //console.log(`${firstNum} + ${secNum} = ${result}`)
        }
        else if (btn == '**') {
            let counter = secNum
            result = 1
    
            for (result = 1; counter; counter--) { // тут имеется в веду counter != 0 так как for работает пока условие (второй элемент) в скобках истино
                result *= firstNum
    
            }
            
            //console.log(`${firstNum} ** ${secNum} = ${result}`)


        this.result = +this.actualNumber + +this.prevNumber
        this.prevNumber = this.actualNumber
        this.actualNumber = ''
    }

    },

    calculate () {

        document.getElementsByClassName('item_result')[0].innerText = this.result
    },

}

