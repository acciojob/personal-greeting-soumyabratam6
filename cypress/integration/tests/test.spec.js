describe('Personalized Greeting', () => {
    it('displays a personalized greeting when the name is entered', () => {
        cy.visit('/'); // Ensure this points to the correct route for your App component
        const name = 'John'; // Example name to input

        // Simulate typing the name into the input field
        cy.get('input') // Select the input field
            .type(name) // Type the name into the input
            .should('have.value', name); // Assert that the input value is correct

        // Now check for the greeting message
        cy.get('h2').should('contain', `Hello, ${name}!`); // Check for the greeting
    });
});