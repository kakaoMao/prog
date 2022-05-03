let userLogin = prompt('Введите логин')
let userPassword


function checkCred(userLogin) {
    if (userLogin == 'Admin'){
        // console.log(`User ${userLogin} exist`)
        userPassword = prompt('Введите пароль')

            if (userPassword == 'Я главный') console.log('Здравствуйте!')
            else if (userPassword == undefined || userLogin == '') {
                console.log('Отменено')
            }
            else console.log('Неверный пароль')
    }
        else if (userLogin == undefined || userLogin == '') {
        console.log('Отменено')
    }
        else console.log(`Я вас не знаю`)
    
}

checkCred(userLogin)