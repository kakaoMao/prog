/// <reference types="cypress" />

let authData = {
  access_token : '',
  username : 'mpetrov',
  password : '!QAZ2wsx#EDC',
  systemUrl : 'https://oracle-disk.msoftgroup.ru',

}

describe('MFlash authentification', () => {
  beforeEach(() => {
    Cypress.Cookies.debug(true)
    cy.clearCookies()
    cy.visit(authData.systemUrl)
    // Авторизуемся что бы заранее знать токен авторизации и потом его сравнить
    cy.request('POST', `${authData.systemUrl}/api_v2/auth`, {
      login: authData.username,
      password: authData.password,
      client: null,
      pbl: null,
      wui: null,
      check: false
    }).its('body').its('token')
    .then( (authResponce) => {
      // console.log(authResponce.access_token)
      authData.access_token = authResponce.access_token
    })
    
  })

  it('Entering login and password for entering on system', () => {
    // авторизуемся в системе
    cy.contains('Логин или email').parent().find('input[type=text]').type(authData.username)
    cy.contains('Продолжить').click()
    cy.contains('Пароль').parent().find('input[type=password]').type(authData.password)
    cy.contains('Войти в систему').click()

    // перехватываем последний запрос при авторизации проверяя его успешность по ответу от сервера и проверяем токен авторизации
    cy.intercept('GET', '**/flash/list*').as('getFlashList')
    cy.wait('@getFlashList').its('response')
    .should('have.property', 'statusCode', 200)
    cy.getCookie('PHPSESSID').should('have.property', 'value', authData.access_token)
    
  })
  
})
