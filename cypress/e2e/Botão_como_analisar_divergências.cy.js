

describe('Criação de botão com modal para análise de divergências', () => {

    beforeEach(() => {
        cy.wait(1000)
    })

    it('Acessar a tela macro da conciliação', () => {
        cy.viewport(1000, 600)
        cy.visit('http://localhost:3001/ecard-ui/conciliacao')
        cy.get('.css-19kgwb8').should('have.text', 'Conciliação Bancária')
        cy.get('.css-19kgwb8').should('not.have.text', 'Detalhamento da Conciliação Bancária')

    }),

    it('Acessar a tela de detalhamento da CB e acessar o modal', () => {
        cy.visit('http://localhost:3001/ecard-ui/conciliacao/1')
        cy.get('.css-19kgwb8').should('have.text', 'Detalhamento da Conciliação Bancária')
        cy.get('[text="Como analisar Divergências"]').click()
        cy.get('.sc-llJcti').should('contain', 'Procure o pagamento que deseja')
        

    })

})