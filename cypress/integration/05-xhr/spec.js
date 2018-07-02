/// <reference types="cypress" />
// note, we are not resetting the server before each test
// and we want to confirm that IF the application has items already
// (for example add them manually using the browser localhost:3000)
// then these tests fail!

it('starts with zero items (waits)', () => {
  cy.visit('/')
  // wait 1 second
  // then check the number of items
  cy.get('li.todo').should('have.length', 0)
})

it('starts with zero items', () => {
  // start Cypress network proxy with cy.server()
  // spy on route `GET /todos`
  //  with cy.route(...).as(<alias name>)
  // THEN visit the page
  cy.visit('/')
  // wait for `GET /todos` route
  //  using "@<alias name>" string
  // then check the DOM
  cy.get('li.todo').should('have.length', 0)

  // second part: when spying on the XHR using an alias
  // confirm that the response was an empty list
})

it('starts with zero items (stubbed response)', () => {
  // start Cypress network server
  // stub `GET /todos` with []
  // save the stub as an alias

  // THEN visit the page
  cy.visit('/')

  // wait for the route alias
  // grab its response body
  // and make sure the body is an empty list
})

describe('fixtures', () => {
  it('starts with zero items (fixture)', () => {
    // start Cypress network server
    // stub `GET /todos` with fixture "empty-list"

    // visit the page
    cy.visit('/')

    // then check the DOM
    cy.get('li.todo').should('have.length', 0)
  })

  it('loads several items from a fixture', () => {
    // start Cypress network server
    // stub route `GET /todos` with data from a fixture file "two-items.json"
    // THEN visit the page
    cy.visit('/')
    // then check the DOM: some items should be marked completed
    // we can do this in a variety of ways
  })
})

it('posts new item to the server', () => {
  // start Cypress network server
  // spy on "POST /todos", save as alias
  cy.visit('/')
  cy.get('.new-todo').type('test api{enter}')

  // wait on XHR call using the alias, grab its request or response body
  // and make sure it contains
  // {title: 'test api', completed: false}
  // hint: use cy.wait(...).its(...).should('have.contain', ...)
})

it('posts new item to the server response', () => {
  // start Cypress network server
  // spy on "POST /todos", save as alias
  cy.visit('/')
  cy.get('.new-todo').type('test api{enter}')

  // wait on XHR call using its alias, grab its response body
  // and it should contain the title and the completed "false" object
})
