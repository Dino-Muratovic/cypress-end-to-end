describe('Testing our form', function(){

    beforeEach(function (){
        cy.visit('http://localhost:3000')  
    })

    it ('Add test to inputs and submit form', function(){
       cy.get('input[name="name"]')
         .type('Christina') // grab that element
         .should('have.value', 'Christina') // assert that it actually did that
         
       cy.get('input[name="email"]') 
         .type('email@email.com')
         .should('have.value', 'email@email.com'); // checking if it has the email@email in there   
         
       cy.get("textarea")
         .type('I want to help people')
         .should("have.value", 'I want to help people') 
         
       cy.get('#positions')
         .select("Yard Work")
         .should("have.value", "Yard Work")  

       cy.get('[type="checkbox"]').check()
         .check()
         .should('be.checked') 
         
       cy.get("button").click();  
    });
});