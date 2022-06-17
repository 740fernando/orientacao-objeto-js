class ContaBancaria {
    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo= 0; 
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor){
        return valor >this._saldo
            ? "Operação negada"
            : this._saldo = this._saldo - valor ;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaCredito){
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaCredito = cartaCredito;
    }

    get cartaCredito(){
        return this._cartaCredito;
    }

    set cartaCredito(valor){
        this._cartaCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero){
        super(agencia, numero);
        this._cartaCredito = 'poupança';
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'universitária';
    }


sacar(valor) {
    return valor > 500
        ? 'Operação Negada!'
        : this.sacar-=valor;
    }
}