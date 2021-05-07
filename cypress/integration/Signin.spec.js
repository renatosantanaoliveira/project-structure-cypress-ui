/// <reference types="cypress" />

import Auth from '../support/SignIn/SignInPage'
import Home from '../support/Home/HomePage'

describe('Login Demo QA', () =>{
    beforeEach(() => {
        cy.visit('/login')
    })

    context('Happy path', () => {
        it('Validate log-in screen', function () {
            Auth.validateLogin()
            cy.screenshot('validate-page')
        })

        it('Log in successfully', function () {
            Auth.authenticateUser()
            Home.validateMessagemWelcome()
            cy.screenshot('login-successfully')
        })
    })

    context('Alternative path', () => {
        it('Log in with the wrong data', function () {
            Auth.authenticateWithDataInvalid()
            Auth.validateInvalidUserMessage()
            cy.screenshot('invalid-user')
        })
    });

})