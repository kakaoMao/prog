

//console.log(`First number = ${firstNum}, First number type = ${typeof(firstNum)}`)

function dataValidate(firstNum, secNum, operation) { 
                                                        // В данной функции, если мы точно знаем, что в firstNum будут введены буквы, 
                                                        // можно быть уверенным, что в переменной firstNum будет лежать NaN, 
                                                        // так как мы приводим буквы к цифрам функцией Number(). 
                                                        // !NaN = true, значит мы можем ориентироваться на  проверку 
                                                        // !firstNum == true. Это будет давать нам понимание, что лежит в firstNum
                                                        // если !firstNum = true значит там лежит NaN
                                                        // или же Boolean(NaN) = false
    if (firstNum === '' || Boolean(firstNum) == false ) {  
        console.log(`First number are not supplied or supplied wrong. First number type: ${typeof(firstNum)}, ${firstNum}`)
    }
    else if (secNum == '' || Boolean(secNum) == false) { 
        console.log('Second number are not supplied')
    }
    else if (operation == '' ) { 
        console.log('Operation are not supplied')
    }
    else return true
}

function compute(firstNum, secNum, operation) {
    
    let a = (dataValidate(firstNum, secNum, operation)) ? 'successfil' : 'failed' 
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
        console.log(`${firstNum} * ${secNum} = ${result}`)
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

function calculator() {

    let equation = {}

    equation['firstNum'] = Number(prompt('Введите первое число:'))
    equation['secNum'] = Number(prompt('Введите второе число:'))
    equation['operation'] = prompt('Введите операцию:')


    // firstNum = Number(prompt('Введите первое число:'))
    // secNum = Number(prompt('Введите второе число:'))
    // operation = prompt('Введите операцию:')

    if (dataValidate(equation.firstNum, equation.secNum, equation.operation)) {
        compute(equation.firstNum, equation.secNum, equation.operation)
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



function userAuth() {  

    let userData = {}

    userData['userLogin'] = prompt('Введите логин', 'Admin')

    if (userData.userLogin == 'Admin'){
        // console.log(`User ${userLogin} exist`)
        userData['userPassword'] = prompt('Введите пароль', 'Я главный') ?? 'Я главный'

            if (userData.userPassword == 'Я главный'){
            console.log('Здравствуйте!')
            getApp()
            }
            else if (userData.userPassword == undefined || userData.userPassword == '') {
                console.log('Ввод пароля отменен')
            }
            else console.log('Неверный пароль')
    }
        else if (userData.userLogin == undefined || userData.userLogin == '') {
        console.log('Ввод логина отменен')
    }
        else console.log(`Я вас не знаю`)
    
}

function getApp () {

    let app = prompt('Выберите приложение: Калькулятор, Простые числа') ?? 'Calc'
    if (app == 'Калькулятор' || app == 'Calculator' || app == 'Calc' || app == '1') {
        console.log('You chose calculator')
        calculator()
    }
    else if (app == 'Простые числа' || app == 'Simple numbers' || app == 'Simp' || app == '2')  {
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

let salaries = {
    'max':100,
    'text':'this is text',
    'nastya':150,
    'dog':200,
    salarySum() {
        for (let i in this){
            if (typeof this[i] == 'number'){
                console.log(`${i} salary is ${this[i]}`)
            }
        }
    },
    salaryDouble() {
        for (let i in this){
            if (typeof this[i] == 'number'){
                console.log(`${i} doubled salary is ${this[i] * 2}`)
            }
        }    
    }
}


function checkObject(param) {

    let b = 0

    for (i in param){
        console.log(param[i], i)
        if (typeof param[i] == 'number'){
            //b += Number(param[i])
            
            param[i] = param[i] * 2
            console.log(param[i])
        } 

    }
    //console.log(`Total salary is ${b}`)
    
}

checkObject(salaries)

//userAuth()

//calculator()