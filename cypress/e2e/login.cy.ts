import LoginPage from '../pages/LoginPage';

describe('Login Functionality', () => {

  const loginPage = new LoginPage();

  beforeEach(() => {
    cy.fixture('users').as('users');
    loginPage.visit();
  });

  it('should login successfully with valid credentials', function () {
    loginPage.login(
      this.users.validUser.username,
      this.users.validUser.password
    );

    cy.url().should('include', '/inventory.html');
  });

  it('should fail login with invalid credentials', function () {
    loginPage.login(
      this.users.invalidUser.username,
      this.users.invalidUser.password
    );

    loginPage.errorMessage()
      .should('contain.text', 'Username and password do not match');
  });

  it('should not allow login for locked out user', function () {
    loginPage.login(
      this.users.lockedUser.username,
      this.users.lockedUser.password
    );
  
    loginPage.errorMessage()
      .should('contain.text', 'Sorry, this user has been locked out');
  });


});
