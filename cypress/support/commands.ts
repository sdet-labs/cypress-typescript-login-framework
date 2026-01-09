
Cypress.Commands.add('login', (username: string, password: string) => {
    if (username) {
      cy.get('#user-name').clear().type(username);
    }
  
    if (password) {
      cy.get('#password').clear().type(password);
    }
  
    cy.get('#login-button').click();
  });