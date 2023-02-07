//pré-condição para iniciar, é ter iniciado com os comandos npm start
//e o npm run dev para carregar os dados de conciliação.

describe('Teste de acesso a página', () => {
    it('ACESSAR A TELA MACRO DA NOVA CB', () => {

        cy.viewport(1440, 900)
        cy.visit('localhost:3001/ecard-ui/conciliacao/')
        cy.get('.css-19kgwb8').should('have.text', 'Conciliação Bancária')
        cy.get('.css-19kgwb8').should('not.have.text', 'Detalhamento da Conciliação Bancária')
    })
        
})