

describe('Funcionalidade do botão COMENTAR', () => {


    //it('Acessar a tela macro da CB e indo para a tela de detalhamento', () => {
        //cy.visit('http://localhost:3001/ecard-ui/conciliacao')
        //cy.get('.css-19kgwb8')
         //   .should('have.text', 'Conciliação Bancária')
            //.should('not.have.text', 'Detalhamento da Conciliação Bancária')
       // cy.get('[data-id="1"] > .MuiDataGrid-cell--textLeft > .MuiButtonBase-root').click()
       // cy.get('[style="width: 100%; display: flex; justify-content: flex-start; flex-direction: column; align-items: center;"] > :nth-child(4)').should('contain', 'Pagamentos Divergentes')


    

        it('Acessando o card operadora na CB e inserindo um novo comentário', () => {
            
            cy.visit('http://apps.homolog.boavistanet.com.br:8710/ecard-ui/token/d94943a5-a5fc-42cb-898f-746f1f7c1628')
            cy.get('.css-1ab0cw6 > .MuiTypography-root').click({ force: true })
            cy.get('[data-id="56870"] > .MuiDataGrid-cell--textLeft > .MuiButtonBase-root')
                .should('contain', 'Detalhes')
                .click()
            cy.visit('http://apps.homolog.boavistanet.com.br:8710/ecard-ui/conciliacao/10181')
            cy.get('.css-19kgwb8')
                .should('have.text', 'Detalhamento da Conciliação Bancária')
            cy.get('[data-id="9438418"] > [data-field="operatorComment"] > .MuiButtonBase-root')
                .should('have.text', 'Comentar')
                .click()
            cy.get('.sc-iBYQkv')
                .should('contain', 'Salvar')
                .click()
            cy.get('#outlined-multiline-static')
                .click()
                .type('teste')
            cy.get('.sc-gKPRtg > .MuiButton-text')
                .should('have.text', 'Salvar')
                .click()
            cy.on('window:alert', msg => { 
                expect(msg).to.be.equal('Comentário alterado com sucesso')
            })
            
        }),


        it('Editando um comentário', () => {
            cy.visit('http://apps.homolog.boavistanet.com.br:8710/ecard-ui/token/d94943a5-a5fc-42cb-898f-746f1f7c1628')
            cy.get('.css-1ab0cw6 > .MuiTypography-root').click({ force: true })
            cy.get('[data-id="56870"] > .MuiDataGrid-cell--textLeft > .MuiButtonBase-root')
                .should('contain', 'Detalhes')
                .click()
            cy.visit('http://apps.homolog.boavistanet.com.br:8710/ecard-ui/conciliacao/10181')
            cy.get('.css-19kgwb8')
                .should('have.text', 'Detalhamento da Conciliação Bancária')
            cy.get('[data-id="9438418"] > [data-field="operatorComment"] > .MuiButtonBase-root')
                .should('have.text', 'Comentar')
                .click()
            cy.get('.sc-gKPRtg > .MuiButton-text')
                .should('contain', 'Editar')
                .click()
            cy.get('#outlined-multiline-static')
                .clear({ force: true} )
                .click()
                .type('teste')
            cy.get('.sc-gKPRtg > .MuiButton-text')
                .should('have.text', 'Salvar')
                .click()
            cy.on('window:alert', msg => { 
                expect(msg).to.be.equal('Comentário alterado com sucesso')
            })
            
        }),

        it('Excluindo um comentário', () => {
            cy.visit('http://apps.homolog.boavistanet.com.br:8710/ecard-ui/token/d94943a5-a5fc-42cb-898f-746f1f7c1628')
            cy.get('.css-1ab0cw6 > .MuiTypography-root').click({ force: true })
            cy.get('[data-id="56870"] > .MuiDataGrid-cell--textLeft > .MuiButtonBase-root')
                .should('contain', 'Detalhes')
                .click()
            cy.visit('http://apps.homolog.boavistanet.com.br:8710/ecard-ui/conciliacao/10181')
            cy.get('.css-19kgwb8')
                .should('have.text', 'Detalhamento da Conciliação Bancária')
            cy.get('[data-id="9438418"] > [data-field="operatorComment"] > .MuiButtonBase-root')
                .should('have.text', 'Comentar')
                .click()
            cy.get('.sc-gKPRtg > .MuiButton-transparent')
                .should('contain', 'Excluir')
                .click()
            cy.on('window:alert', msg => { 
                    expect(msg).to.be.equal('Comentário excluído')
                })

        })


})