describe('user can create a contact', () => {
	beforeEach('test', () => {
		cy.visit('http://localhost:3001')
        cy.get('#add-contact').click()
        cy.get('#name').type('Davit')
		cy.get('#email').type('david-danielyan@hotmail.com')
		cy.get('#phone').type('0729420089')
		cy.get('#company').type('Student')
		cy.get('#notes').type('Awesome coder')
		cy.get('#submit').click()
	})
    it('displays a name of the new contact', () => {
		cy.get('#contact-list').should('contain', 'Davit')
	})
	
	it('displays the phone number of the new contact', () => {
		cy.get('#contact-list').should('contain', '0729420089')
	})
})