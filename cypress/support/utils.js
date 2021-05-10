class Util {
    getRandomPhone() {
        return Math.floor(Math.random() * 99999999999 + 1)
    }

    getRandonPassword() {
        return Math.random().toString(36).slice(-7)
    }

    getRandonCode(){
        this.textoAleatorio(6)
    }

    getRandonCode(tamanho) {
        const letras = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
        let aleatorio = '';
        for (let i = 0; i < tamanho; i++) {
            const rnum = Math.floor(Math.random() * letras.length);
            aleatorio += letras.substring(rnum, rnum + 1);
        }
        return aleatorio;
    }

    screenshot() {
        const dateFull = new Date();
        const dateCurrent = dateFull.getUTCDate() + '-' + (dateFull.getUTCMonth() + 1) + '-' + dateFull.getFullYear()
        const horaCurrent = dateFull.getHours() + '' + dateFull.getMinutes() + '' + dateFull.getSeconds()
        var dateTimeCurrent = dateCurrent + '_' + horaCurrent

        cy.screenshot(dateTimeCurrent)
    }
}

export default new Util()