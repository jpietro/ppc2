describe('User Form', () => {
  describe('When visit user form url', () => {
    const validEmail = 'email_1@gmail.com';
    const validAge = '20';
    const validSo = 'Windows';
    // validToken = '1';

    beforeEach(() => {
      cy.visit('/userform');
    });

    it('contains h1 userform', () => {
      cy.contains('h1', 'User Form');
    });

    describe('When fill email, age and SO', () => {
      beforeEach(() => {
        cy.get('.user_input_email').type(validEmail);
        cy.get('.user_input_idade').type(validAge);
        cy.get('select').select(validSo).should('have.value', validSo);
      });
    });
  });
});
