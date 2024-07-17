// Definindo a classe Cliente
class Cliente {
    constructor(nome, cpf, data_de_nascimento, saldo) {
        this.nome = nome;
        this.cpf = cpf;
        this.data_de_nascimento = data_de_nascimento;
        this.saldo = saldo;
    }

    consultarSaldo() {
        return this.saldo;
    }

    executarTransferencia(valor, destino) {
        // Lógica para realizar uma transferência
        // Neste exemplo, vamos apenas deduzir o saldo do cliente atual
        if (valor <= this.saldo) {
            this.saldo -= valor;
            destino.saldo += valor;
            console.log(`Transferência de R$${valor.toFixed(2)} realizada para ${destino.nome}`);
        } else {
            console.log(`Saldo insuficiente para transferência de R$${valor.toFixed(2)}`);
        }
    }

    ocultarSaldo() {
        delete this.saldo;
        console.log("Saldo ocultado com sucesso.");
    }
}

// Instanciando objetos Cliente
let primeiroCliente = new Cliente("Roberto", "440.797.107-04", "19/09/1998", 5422.22);
let segundoCliente = new Cliente("Maria", "123.456.789-00", "25/03/1990", 3000.00);

// Exibindo informações dos clientes
console.log("Informações do primeiro cliente:");
console.log(`Nome: ${primeiroCliente.nome}`);
console.log(`CPF: ${primeiroCliente.cpf}`);
console.log(`Data de Nascimento: ${primeiroCliente.data_de_nascimento}`);
console.log(`Saldo: R$${primeiroCliente.consultarSaldo().toFixed(2)}`);

console.log("\nInformações do segundo cliente:");
console.log(`Nome: ${segundoCliente.nome}`);
console.log(`CPF: ${segundoCliente.cpf}`);
console.log(`Data de Nascimento: ${segundoCliente.data_de_nascimento}`);
console.log(`Saldo: R$${segundoCliente.consultarSaldo().toFixed(2)}`);

// Realizando uma transferência entre clientes
console.log("\nRealizando transferência entre clientes:");
primeiroCliente.executarTransferencia(1500.00, segundoCliente);

// Exibindo saldos após a transferência
console.log(`\nSaldo atual do ${primeiroCliente.nome}: R$${primeiroCliente.consultarSaldo().toFixed(2)}`);
console.log(`Saldo atual da ${segundoCliente.nome}: R$${segundoCliente.consultarSaldo().toFixed(2)}`);
