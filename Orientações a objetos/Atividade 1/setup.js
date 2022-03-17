class ContaBancaria {
    construtor(agencia, numero, tipo,){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor
    }

    sacar(valor){
        if (valor > this._saldo) {
            return  "Operação negada"
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor) {
        this._saldo = this._saldo + valor
    }
}

class ContaCorrente extends ContaBancaria {
    construtor(agencia, numero, cartaoCredito){
        supe(agencia, numero);
        this.tipo = 'corrente';
        this.cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor
    }
}

class ContaPoupanca extends ContaBancaria {
    construtor(agencia, numero){
        supe(agencia, numero);
        this.tipo = 'poupança';
    }

}

class ContaUniversitaria extends ContaBancaria {
    construtor(agencia, numero){
        supe(agencia, numero);
        this.tipo = 'universitária';
    }

    sacar(valor){
        if (valor > 500){
            return "Operação negada";
        }
        this._saldo = this._saldo - valor;
    }

}