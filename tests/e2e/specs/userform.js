describe('User Form', () => {
  describe('When visit user form url', () => {
    const validEmail = 'email_1@gmail.com';
    const invalidEmail = 'email@';
    const underAge = '15';
    const aboveAge = '100';
    const letterAge = 'a18';
    const validAge = '20';
    const validSo = 'Windows';

    beforeEach(() => {
      cy.visit('/userform');
    });

    it('contains h1 userform', () => {
      cy.contains('h1', 'User Form');
    });

    describe('When the SO is empty', () => {
      it('contains a message SO empty', () => {
        cy.get('.user_h1_so').should('be.visible');
      });
    });

    describe('When the SO is filled', () => {
      beforeEach(() => {
        cy.get('select').select(validSo).should('have.value', validSo);
      });
      it('the message SO empty not be visible', () => {
        cy.get('.user_h1_so').should('not.be.visible');
      });
    });

    describe('When the email is not valid', () => {
      beforeEach(() => {
        cy.get('.user_input_email').type(invalidEmail);
      });
      it('contains a message email error', () => {
        cy.get('.user_h1_email').should('be.visible');
      });
    });

    describe('When the email is valid', () => {
      beforeEach(() => {
        cy.get('.user_input_email').type(validEmail);
      });
      it('the message email error not be visible', () => {
        cy.get('.user_h1_email').should('not.be.visible');
      });
    });

    describe('When the age is under 18', () => {
      beforeEach(() => {
        cy.get('.user_input_idade').type(underAge);
      });
      it('contains a message age error', () => {
        cy.get('.user_h1_idade').should('be.visible');
      });
    });

    describe('When the age is above 99', () => {
      beforeEach(() => {
        cy.get('.user_input_idade').type(aboveAge);
      });
      it('contains a message age error', () => {
        cy.get('.user_h1_idade').should('be.visible');
      });
    });

    describe('When the age contains a letter', () => {
      beforeEach(() => {
        cy.get('.user_input_idade').type(letterAge);
      });
      it('contains a message age error', () => {
        cy.get('.user_h1_idade').should('be.visible');
      });
    });

    describe('When the age is valid', () => {
      beforeEach(() => {
        cy.get('.user_input_idade').type(validAge);
      });
      it('the message age error not be visible', () => {
        cy.get('.user_h1_idade').should('not.be.visible');
      });
    });
  });
});
