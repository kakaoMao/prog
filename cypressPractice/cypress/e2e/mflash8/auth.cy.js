/// <reference types="cypress" />

const username = 'mpetrov'
const password = '!QAZ2wsx#EDC'
let accessToken = '22356eca146af2d618e9f56a9284298f0eac6d7cd9a433465b2feddf685132d3'
const systemUrl = 'https://oracle-disk.msoftgroup.ru'

describe('MFlash authentification', () => {
  beforeEach(() => {
    Cypress.Cookies.debug(true)
    cy.clearCookies()
    cy.visit(systemUrl)
    // Предварительно авторизуемся, что бы потом сравнить токен из запроса с токеном, полученным через UI
    let test = cy.request('POST', `${systemUrl}/api_v2/auth`, {
      login: username,
      password: password,
      client: null,
      pbl: null,
      wui: null,
      check: false
    }).then((response) => {
      expect(response.body).property('token')
      })
  })

  it('Entering login and password for entering on system', () => {
    // авторизуемся в системе
    cy.contains('Логин или email').parent().find('input[type=text]').type(username)
    cy.contains('Продолжить').click()
    cy.contains('Пароль').parent().find('input[type=password]').type(password)
    cy.contains('Войти в систему').click()

    // перехватываем последний запрос при авторизации проверяя его успешность по ответу от сервера и проверяем токен авторизации
    cy.intercept('GET', '**/flash/list*').as('getFlashList')
    cy.wait('@getFlashList').its('response')
    .should('have.property', 'statusCode', 200)
    cy.getCookie('PHPSESSID').should('have.property', 'value', accessToken)
    
  })
  
})
