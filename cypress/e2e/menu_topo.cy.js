

describe('Teste de acesso a página', () => {
    
    it('VALIDAR MENU DE TOPO', () => {

        cy.viewport(1440, 900)
        cy.visit('localhost:3001/ecard-ui/conciliacao/')
        cy.get('.css-x4v26s > :nth-child(4) > .MuiTypography-root').should('have.text', 'Painéis')
        cy.get('.css-x4v26s > :nth-child(5)').should('have.text', 'Conta Online')
       
    })
        
})