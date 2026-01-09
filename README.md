# Cypress TypeScript Login Framework

**End-to-end UI automation framework using Cypress & TypeScript to test login workflows with positive and negative scenarios, Page Object Model, and custom commands.**

---

## Table of Contents
1. [Overview](#overview)
2. [Tech Stack](#tech-stack)
3. [Prerequisites](#prerequisites)
4. [Setup & Installation](#setup--installation)
5. [Running Tests](#running-tests)
6. [Reporting](#reporting)
7. [Test Coverage](#test-coverage)
8. [Design Decisions](#design-decisions)
9. [Future Enhancements](#future-enhancements)

---

## Overview
This framework automates login functionality of web applications using Cypress and TypeScript.  
It demonstrates positive and negative test scenarios, clean code design with **Page Object Model (POM)**, **custom Cypress commands**, and structured test data using **fixtures**.

---

## Tech Stack
- **Language:** TypeScript
- **Automation Framework:** Cypress
- **Test Design:** Page Object Model + Custom Commands
- **Test Data:** Cypress Fixtures (JSON)
- **Reporting:** Mochawesome
- **Version Control:** Git/GitHub

---

## Prerequisites
- Node.js v16+  
- npm v8+  

---

## Setup & Installation
1. Clone the repository:

   ```bash
   git clone https://github.com/sdet-labs/cypress-typescript-login-framework.git
   ```
2. Navigate to project folder:

   ```bash
   cd cypress-typescript-login-framework
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
---

## Running Tests

### Open Cypress Test Runner (UI)

   ```bash
    npm run cypress:open
   ```

### Run All Tests Headlessly

   ```bash
    npm run cypress:run
   ```
---

## Reporting
- Test results are generated with Mochawesome
- HTML and JSON reports are available in the /reports folder
- Screenshots are automatically captured for any failed tests

---

## Test Coverage
The framework covers login functionality for SauceDemo:
- Successful login with valid credentials
- Failed login with invalid credentials
- Locked-out user login
- Empty credentials validation

---

## Design Decisions
The framework covers login functionality for SauceDemo:
- **Page Object Model (POM):** Encapsulates selectors and actions for maintainable code
- **Custom Commands:** cy.login() reusable login workflow
- **Fixtures:** Centralised test data for easy updates and scalability
- **TypeScript:** Provides type safety and cleaner code
- **Cypress + Mochawesome:** Fast and reliable testing with clear reporting

---

## Future Enhancements
The framework covers login functionality for SauceDemo:
- CI/CD integration (GitHub Actions or Jenkins)
- Environment-based configuration for different URLs or credentials
- API-driven test setup for backend validation
- Accessibility and performance testing
- Parallel test execution

---
