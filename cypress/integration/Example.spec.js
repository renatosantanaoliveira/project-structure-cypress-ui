/// <reference types="cypress" />

import Auth from '../support/SignIn/SignInPage'
import Home from '../support/Home/HomePage'

describe('Login Demo QA', () =>{

    context('Happy path', () => {
        it('Validate log-in screen', function () {
            Auth.validateLogin()
        })

        it('Log in with success', function () {
            Auth.authenticateUser()
            Home.validateMessagemWelcome()
        })
    })

})