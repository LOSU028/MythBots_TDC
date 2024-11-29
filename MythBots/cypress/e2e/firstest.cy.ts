describe('Login Flow', () => {
    it('Test login page flow', async () => {
        cy.visit('http://localhost:4200/')
        cy.contains('Welcome Back!') 


        cy.get('input[name="username"').type('admin2', {force: true})
        cy.get('input[name="password"').type('KJ_wQigM59C4gzv', {force: true})

        cy.contains('button','Login').click()
        cy.url().should('include', '/home')

    })  
})