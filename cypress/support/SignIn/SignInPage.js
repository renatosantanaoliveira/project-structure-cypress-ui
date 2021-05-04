import user from '../../fixtures/user.json'
import newUser from '../../fixtures/new-user.json'
import util from '../utils'

const el =  require('./SignInElements').authElements
class AuthPage {
    validateLogin() {
        cy.get(el.MENSAGEM.WELCOME).should('contain', 'Bem vindo')
        cy.get(el.MENSAGEM.INFORMATIVE).should('contain', 'Faça login')

        cy.get(el.LOGIN.BTN_LOGIN).should('be.disabled')

        cy.get(el.LOGIN.PHONE).should('be.visible')
        cy.get(el.LOGIN.PASSWORD).should('be.visible')
        cy.get(el.LOGIN.BTN_LOGIN).should('be.visible')
    }

    fastLogin(phone, passwd) {
        cy.get(el.LOGIN.PHONE).type(phone)
        cy.get(el.LOGIN.PASSWORD).type(passwd)
        cy.get(el.LOGIN.BTN_LOGIN).click()
    }

    validateInvalidUserMessage() {
        cy.get(el.MENSAGEM.INVALID).should('contain', 'Usuário ou senha inválido')
    }

    authenticateUser() {
        this.fastLogin(user.phone, user.senha)
    }

    authenticateWithPasswordInvalid() {
        this.fastLogin(user.phone, util.getRandonPassword())
    }

    authenticateWithDataInvalid() {
        this.fastLogin(util.getRandomPhone(), util.getRandonPassword())
    }

}

export default new AuthPage()