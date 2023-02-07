

describe('Criação de botão e visualização de detalhes de pagamentos conciliados', () => {
    
        beforeEach(() => {
            cy.wait(1000)
        })
    
    it('Acessar a tela macro da conciliação', () => {
        cy.viewport(1024, 768)
        cy.visit('http://localhost:3001/ecard-ui/conciliacao/')
        cy.get('.css-19kgwb8').should('have.text', 'Conciliação Bancária')
        cy.get('.css-19kgwb8').should('not.have.text', 'Detalhamento da Conciliação Bancária')
             
    }),

    it('Acessar a tela de detalhamento', () => {
        cy.visit('http://localhost:3001/ecard-ui/conciliacao/')
        cy.get('[data-id="1"] > .MuiDataGrid-cell--textLeft > .MuiButtonBase-root').click()
        cy.get('[style="width: 100%; display: flex; justify-content: flex-start; flex-direction: column; align-items: center;"] > :nth-child(6)').should('have.text', 'Pagamentos Conciliados')
        cy.get('[data-id="5"] > [data-field="details"] > .MuiButtonBase-root').click()
        

    })
   
})