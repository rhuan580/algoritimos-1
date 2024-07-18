class Cliente {
    constructor (nome, cpf, data_de_nascimento, saldo) {
        this.nome = nome;
        this.cpf = cpf;
        this.data_de_nascimento = data_de_nascimento;
        this.saldo = saldo;
    }
    consultarSaldo (){
        console.log("O seu saldo é" + this.saldo);
    }
    executarTransferencia (){
        console.log("Sua transferencia foi realizada!");
    }
    ocultarSaldo (){
        console.log("Sei Saldo foi ocultado");
    }

}

const primeiroCliente = new Cliente("Carlos", "440.797.107-04", "19/09/1998", 5422.22);
console.log(primeiroCliente.saldo);
primeiroCliente.consultarSaldo();
primeiroCliente.executarTransferencia();
primeiroCliente.ocultarSaldo();