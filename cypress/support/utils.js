class Util {
    getRandomPhone() {
        return Math.floor(Math.random() * 99999999999 + 1)
    }

    getRandonPassword() {
        return Math.random().toString(36).slice(-7)
    }

    // getRandonCode(){
    //     this.textoAleatorio(6)
    // }

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
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;

        cy.screenshot(today)
    }
}

export default new Util()