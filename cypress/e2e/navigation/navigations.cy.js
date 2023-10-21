describe('Navigation is working', () => {
    it('Navigate to statistics page', () => {
        cy.visit('/statistics')
        cy.url().should('include', '/statistics')
    })
    it('Navigate to settings page', () => {
        cy.visit('/settings')
        cy.url().should('include', '/settings')
        cy.contains('Settings').should('be.visible')
    })
})
