describe('Login Flow', () => {
    it('Test login page flow', async () => {
        cy.visit('http://localhost:4200/')
        cy.contains('Welcome Back!') 


        cy.get('input[name="username"').type('admin2', {force: true})
        cy.get('input[name="password"').type('KJ_wQigM59C4gzv', {force: true})

        cy.contains('button','Login').click()
        cy.url().should('include', '/home')

    }) 

    it('Debera de cargar la pagina de register', async () => {
        cy.visit('http://localhost:4200/')
        cy.contains('Welcome Back!') 


        cy.get('input[name="username"').type('admin3', {force: true})
        cy.get('input[name="email"').type('test@gmail.com', {force: true})
        cy.get('input[name="password"').type('KJ_wQigM59C4gzn', {force: true})

        cy.contains('button','Register').click()
        cy.url().should('include', '/home')

    }) 
})