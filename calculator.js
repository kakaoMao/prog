let firstNum
let secNum
let operation
let result

//console.log(`First number = ${firstNum}, First number type = ${typeof(firstNum)}`)

function dataValidate(firstNum, secNum, operation) { 
                                                        // В данной функции, если мы точно знаем, что в firstNum будут введены буквы, 
                                                        // можно быть уверенным, что в переменной firstNum будет лежать NaN, так как мы приводим буквы
                                                        // к цифрам функцией Number(). 
                                                        // !NaN = true, значит мы можем ориентироваться на  проверку 
                                                        // !firstNum == true. Это будет давать нам понимание, что лежит в firstNum
                                                        // если !firstNum = true значит там лежит NaN
                                                        // или же Boolean(NaN) = false
    if (firstNum === '' || Boolean(firstNum) == false ) {  
        console.log(`First number are not supplied or supplied wrong. First number type: ${typeof(firstNum)}, ${firstNum}`)
    }
    else if (secNum == '' ) { 
        console.log('Second number are not supplied')
    }
    else if (operation == '' ) { 
        console.log('Operation are not supplied')
    }
    else return 0
}

function compute(firstNum, secNum, operation) {
    
    let a = (dataValidate(firstNum, secNum, operation) == 0) ? 'successfil' : 'failed'
    console.log(`Data validate result is ${a}`)

    if (operation == '+') {
        result = +firstNum + +secNum
        console.log(`${firstNum} + ${secNum} = ${result}`)
        //console.log(`First number type: ${typeof(firstNum)}, ${firstNum}`)
    }
    else if (operation == '-') {
        result = +firstNum - +secNum
        console.log(`${firstNum} + ${secNum} = ${result}`)
    }
    else if (operation == '*') {
        result = +firstNum * +secNum
        console.log(`${firstNum} + ${secNum} = ${result}`)
    }
    else if (operation == '/') {
        result = +firstNum / +secNum
        console.log(`${firstNum} + ${secNum} = ${result}`)
    }
    else if (operation == '**') {
        let counter = secNum
        result = 1

        // console.log(`Вычисляем result через цикл while`)
        // while (counter) { // тут имеется в веду counter != 0 так как while работает пока условие в скобках истино
        //     result *= firstNum
        //     counter--
        // }
        
        // то же самое но с помощью цикла for
        console.log(`Вычисляем result через цикл for`)
        for (result = 1; counter; counter--) { // тут имеется в веду counter != 0 так как for работает пока условие (второй элемент) в скобках истино
            result *= firstNum

        }
        
        console.log(`${firstNum} ** ${secNum} = ${result}`)
    }
    else console.log('Undefined operation')

}

function calculator(){

    firstNum = Number(prompt('Введите первое число:'))
    secNum = prompt('Введите второе число:')
    operation = prompt('Введите операцию:')

    if (dataValidate(firstNum, secNum, operation) == 0) {
        compute(firstNum, secNum, operation)
        // console.log(`${firstNum} + ${secNum} = ${result}`) Строка нужна в случае использования
    }   //                                                    второго варианта реализации подсчета operation 
    else console.log(`Wrong data supplied`)

}


// Альтернативная реализация функции подсчета через оператор ? 
// function compute(firstNum, secNum, operation) {
    
//     // Данный блок не работает при таком построении условий проверки переменной operation
//     // a = dataValidate(firstNum, secNum, operation)  
//     // console.log(`Data validate result is ${a}`)
    
//     (operation == '+') ? result = +firstNum + +secNum /* console.log(`${firstNum} + ${secNum} = ${result}`) */   :
//     (operation == '-') ? result = +firstNum - +secNum /* console.log(`${firstNum} + ${secNum} = ${result}`) */   :
//     (operation == '*') ? result = +firstNum * +secNum /* console.log(`${firstNum} + ${secNum} = ${result}`) */   :
//     (operation == '/') ? result = +firstNum / +secNum /* console.log(`${firstNum} + ${secNum} = ${result}`) */   :
//     console.log('Undefined operation')

// }



function userAuth(userLogin, userPassword) {  
    
    let userLogin
    let userPassword

    userLogin = prompt('Введите логин', 'Admin') ?? 'Admin'

    if (userLogin == 'Admin'){
        // console.log(`User ${userLogin} exist`)
        userPassword = prompt('Введите пароль', 'Я главный') ?? 'Я главный'

            if (userPassword == 'Я главный'){
            console.log('Здравствуйте!')
            getApp()
            }
            else if (userPassword == undefined || userPassword == '') {
                console.log('Ввод пароля отменен')
            }
            else console.log('Неверный пароль')
    }
        else if (userLogin == undefined || userLogin == '') {
        console.log('Ввод логина отменен')
    }
        else console.log(`Я вас не знаю`)
    
}

function getApp () {
    let app = prompt('Выберите приложение: Калькулятор, Простые числа') 
    if (app == 'Калькулятор') {
        console.log('You chose calculator')
        calculator()
    }
    else if (app == 'Простые числа') {
        console.log('You chose simple numbers')
        simpleNumbers()
    }
}

function simpleNumbers() {
    let firstNum = Number(prompt('Введите начало интервала', 1))
    let secNum = Number(prompt('Введите конец интервала'))

    dataValidate(firstNum, secNum)
    
    if (dataValidate(firstNum, secNum, operation) == 0) {
            console.log(`Start interval: ${firstNum}`)
            console.log(`End interval: ${secNum}`)

            nextSimpleNum:
        for (firstNum; firstNum <= secNum; firstNum++) {
            //console.log(`New eteration`)
            //console.log(`Start interval: ${firstNum}, end interval ${secNum}`)
            for (let n = 2; n < firstNum; n++){
                //console.log(`Start interval: ${firstNum}, n ${n}`)
                //console.log(`${firstNum} / ${n}`)
                if (firstNum % n == 0){ 
                //console.log(`Skipping: ${firstNum}`)
                continue nextSimpleNum
                }
            }
            console.log(`Simple Number: ${firstNum}`)
        }
    }
    else console.log(`Wrong data supplied`)
}
userAuth()