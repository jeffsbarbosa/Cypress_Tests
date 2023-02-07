

describe('Rotina do botão desabilitar lançamentos', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3001/ecard-ui/conciliacao/1')

    })
    
    it('acessar a tela de detalhamento da CB', () => {
        cy.visit('http://localhost:3001/ecard-ui/conciliacao/1')
        cy.title('e-Extrato Card')
        cy.get('.css-19kgwb8').should('contain', 'Detalhamento')
    }),

    it('Selecionar e desabilitar um lançamento', () => {
        cy.get('.sc-iTONeN > .css-6hnove')
            .should('contain', 'Banco')
            .should('not.contain', 'Operadora')
        cy.get('[data-id="6"] > .MuiDataGrid-cellCheckbox > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
        cy.get('.css-6hnove > .MuiButtonBase-root')
            .click()
            .should('contain', 'Desabilitar Lançamento')
        cy.get('.sc-jdAMXn').should('contain', 'Tem certeza?')
        cy.get('.sc-ciZhAO > .MuiButton-text')
            .should('have.text', 'Sim')
            .click()      

    }),

    it.skip('Validação se o lançamento foi desabilitado', () => {
        cy.get('.sc-iTONeN > .css-6hnove')
            .should('contain', 'Banco')
            .should('not.contain', 'Operadora')

        
        
    })
})