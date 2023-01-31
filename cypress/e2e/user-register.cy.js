describe('New user register', () => {
  it('Fill out register form', () => {
    cy.visit('https://www.cermati.com/app/gabung')
    cy.wait(2000)
    cy.get('#email').clear().type('test@email.com')
    cy.get('#mobilePhone').clear().type('088888888888')
    cy.get('#password').clear().type('Test@123')
    cy.get('#confirmPassword').clear().type('Test@123')
    cy.get('#firstName').clear().type('John')
    cy.get('#lastName').clear().type('Doe')
    cy.get('#cityAndProvince').clear().type('Jakarta').wait(2000).type('{enter}')
    cy.get('[data-button-name="register-new"]').click()
  })
})