const el =  require('./HomeElements').homeElements

class HomePage {
    validateMessagemWelcome() {
        cy.get(el.HOME.MESSAGEM_WELCOME).should('contain', 'Bem vindo')
    }
}

export default new HomePage()