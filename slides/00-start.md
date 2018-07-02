## Start testing

- `cd 00-start`
- open Cypress with `npm run cy:open`

Note:
This section shows how Cypress scaffolds its files and folders. Then the students can ignore this folder. This is only done once to show the scaffolding.

+++

Look at the scaffolded example test files (specs).

Delete them.

+++

## First spec

Create a new file

- `cypress/integration/spec.js`

+++

Type into the `spec.js`

```javascript
it('loads', () => {
  cy.visit('localhost:3000')
})
```

+++

Click on "spec.js" in Cypress GUI

## Questions

- what does Cypress do?
- what happens when the server is down?
  - stop the application server running in folder `todomvc`
  - reload the tests

+++

```javascript
/// <reference types="cypress" />
it('loads', () => {
  cy.visit('localhost:3000')
})
```

- why do we need `reference types ...` line?

Note:
By having "reference" line we tell editors that support it (VSCode, WebStorm) to use TypeScript definitions included in Cypress to provide intelligent code completion. Hovering over any `cy` command brings helpful tooltips.

+++

## IntelliSense

![IntelliSense in VSCode](https://docs.cypress.io/img/snippets/intellisense-setup.a748a413.mp4)

+++

Using `ts-check`

```javascript
/// <reference types="cypress" />
// @ts-check
it('loads', () => {
  cy.visit('localhost:3000')
})
```

- what happens if you add `ts-check` line and misspell `cy.visit`?

Note:
The check works really well in VSCode editor. I am not sure how well other editors support Cypress type checks right out of the box.

+++

## Docs

Your best friend is [https://docs.cypress.io/](https://docs.cypress.io/)

![Doc search](todomvc/img/docs-search.png)

+++

### Questions (find each doc)

- Cypress main features and how it works docs
- core concepts
- command API
  - how many commands are there?

+++

### Find these 🔎

- examples
  - recipes
  - tutorial videos
  - example applications
  - blogs
- Cypress changelog

Note:
Students should know where to find information later on. Main resources is the api page [https://on.cypress.io/api](https://on.cypress.io/api)
