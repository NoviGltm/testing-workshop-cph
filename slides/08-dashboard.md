## Dashboard

- CI is nice, but
  - artifacts are all over the place
  - no consistent view of the tests

+++

## Cypress dashboard

![Cypress dashboard](img/dashboard-runs.png)

+++

- store test results and videos
- insight into each failure
- parallel test execution (coming soon)
- integrations (coming)

+++

- extend work in `07-ci` folder
- open Cypress test runner in interactive mode
- click "Runs / Set up project to record"

![Set up project to record](img/set-up-project-to-record.png)

+++

## Record your test runs

- record a test run locally
- look at the test results at Cypress dashboard
- set the variables and commands to record from CI

**tip** [https://on.cypress.io/dashboard-faq](https://on.cypress.io/dashboard-faq)

+++

## Bonus

- pass record key as an environment variable
- make a test to fail on purpose
- look at the test failure on the dashboard
