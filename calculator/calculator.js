let first = document.getElementsByClassName('item_enteredNumbers')

console.log(first)
console.log((first)[0].innerText)


let compute = { 

    actualNumber : '',

    numInput (num) {
        this.actualNumber += num
        document.getElementsByClassName('item_enteredNumbers')[0].innerText = this.actualNumber
    },

    btnInput (btn) {
        this.actualBtn = btn
        this.actualCalc = this.actualNumber + this.actualBtn
        document.getElementsByClassName('item_enteredNumbers')[0].innerText = this.actualCalc
        this.actualNumber = ''
    },

    result () {
        console.log('Hey, its compute.result')
    },
}


