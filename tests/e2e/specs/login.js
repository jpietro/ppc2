describe('Login', () => {
  describe('When visit login url', () => {
    const validEmail = 'email_1@gmail.com';
    const invalidEmail = 'email@';
    const emailHasNoAccess = 'email_200@gmail.com';
    const notTheSameEmail = 'email_20@gmail.com';
    const validPassword = 'password1';
    const passwordHasNoAccess = 'password200';
    const invalidPassword = '1234';
    const notTheSamePassword = 'password15';


    beforeEach(() => {
      cy.visit('/login');
    });

    it('contains h1 Login', () => {
      cy.contains('h1', 'Login');
    });

    describe('When the email is not valid', () => {
      beforeEach(() => {
        cy.get('.login_input_email').type(invalidEmail);
      });
      it('contains a message email error', () => {
        cy.get('.login_h1_email').should('be.visible');
      });
    });

    describe('When the email is valid', () => {
      beforeEach(() => {
        cy.get('.login_input_email').type(validEmail);
      });
      it('the message email error not be visible', () => {
        cy.get('.login_h1_email').should('not.be.visible');
      });
    });

    describe('When the password is not valid', () => {
      beforeEach(() => {
        cy.get('.login_input_password').type(invalidPassword);
      });
      it('contains a message password error', () => {
        cy.get('.login_h1_password').should('be.visible');
      });
    });

    describe('When the password is valid', () => {
      beforeEach(() => {
        cy.get('.login_input_password').type(validPassword);
      });
      it('the message password error not be visible', () => {
        cy.get('.login_h1_password').should('not.be.visible');
      });
    });

    describe('When fill email and password', () => {
      beforeEach(() => {
        cy.get('.login_input_email').type(validEmail);
        cy.get('.login_input_password').type(validPassword);
      });

      describe('When click button login', () => {
        it('should got to user form', () => {
          cy.url().should('eq', 'http://localhost:8080/login');
          cy.get('button').click();
          cy.url().should('eq', 'http://localhost:8080/userform');
        });
      });
    });
  });
});
