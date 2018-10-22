/// <reference types="cypress" />
import { resetDatabase } from '../../support/utils'

// note, we are not resetting the server before each test
// so this test passes without "wait" - but this is WRONG
it('starts with zero items (waits)', () => {
  cy.visit('/')
  // cy.wait(1000)
  cy.get('li.todo').should('have.length', 0)
})

it('starts with zero items', () => {
  resetDatabase()

  // start Cypress network server
  // spy on route `GET /todos`
  // THEN visit the page
  cy.server()
  cy.route('GET', '/todos').as('todos')
  cy.visit('/')
  // wait for `GET /todos` response
  cy.wait('@todos')
  // second part: inspect the server's response
  // .its('response.body')
  // .should('have.length', 0)
  // then check the DOM
  cy.get('li.todo').should('have.length', 0)
})

it('starts with zero items (stubbed response)', () => {
  // start Cypress network server
  // spy on route `GET /todos`
  // THEN visit the page
  cy.server()
  cy.route('GET', '/todos', []).as('todos')
  cy.visit('/')
  cy
    .wait('@todos') // wait for `GET /todos` response
    // inspect the server's response
    .its('response.body')
    .should('have.length', 0)
  // then check the DOM
  cy.get('li.todo').should('have.length', 0)
})

describe('fixtures', () => {
  it('starts with zero items (fixture)', () => {
    // start Cypress network server
    // stub route `GET /todos`, return data from fixture file
    // THEN visit the page
    cy.server()
    cy.route('GET', '/todos', 'fixture:empty-list').as('todos')
    cy.visit('/')
    cy
      .wait('@todos') // wait for `GET /todos` response
      // inspect the server's response
      .its('response.body')
      .should('have.length', 0)
    // then check the DOM
    cy.get('li.todo').should('have.length', 0)
  })

  it('loads several items from a fixture', () => {
    // start Cypress network server
    // stub route `GET /todos` with data from a fixture file
    // THEN visit the page
    cy.server()
    cy.route('GET', '/todos', 'fx:two-items')
    cy.visit('/')
    // then check the DOM: some items should be marked completed
    // we can do this in a variety of ways
    cy.get('li.todo').should('have.length', 2)
    cy.get('li.todo.completed').should('have.length', 1)
    cy
      .contains('.todo', 'first item from fixture')
      .should('not.have.class', 'completed')
      .find('.toggle')
      .should('not.be.checked')
    cy
      .contains('.todo.completed', 'second item from fixture')
      .find('.toggle')
      .should('be.checked')
  })
})

it('posts new item to the server', () => {
  cy.server()
  cy.route('POST', '/todos').as('new-item')
  cy.visit('/')
  cy.get('.new-todo').type('test api{enter}')
  cy.wait('@new-item').its('request.body').should('have.contain', {
    title: 'test api',
    completed: false
  })
})

it('posts new item to the server response', () => {
  cy.server()
  cy.route('POST', '/todos').as('new-item')
  cy.visit('/')
  cy.get('.new-todo').type('test api{enter}')
  cy.wait('@new-item').its('response.body').should('have.contain', {
    title: 'test api',
    completed: false
  })
})

it('posts item via API', () => {
  resetDatabase()
  cy.request('POST', '/todos', { completed: false, title: 'my test', id: '1' })
  cy.visit('/')
  cy.contains('li.todo', 'my test')
})
