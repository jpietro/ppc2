describe('Login', () => {
    describe('When visit login url', () => {
      const validEmail = 'email_1@gmail.com';
      const validPassword = 'password1';
  
      beforeEach(() => {
        cy.visit('/login');
      });
  
      it('contains h1 Login', () => {
        cy.contains('h1', 'Login');
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