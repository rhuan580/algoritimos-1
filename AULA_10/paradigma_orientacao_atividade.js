// Definindo a classe Cliente
class Cliente {
    // Construtor para inicializar os atributos da classe
    constructor(nome, cpf, data_de_nascimento, saldo) {
        this.nome = nome;
        this.cpf = cpf;
        this.data_de_nascimento = data_de_nascimento;
        this.saldo = saldo;
        this.saldoVisivel = true; // atributo para controlar visibilidade do saldo
    }

    // Método para consultar o saldo
    consultarSaldo() {
        if (this.saldoVisivel) {
            console.log(`Saldo atual: R$ ${this.saldo.toFixed(2)}`);
        } else {
            console.log('Saldo oculto. Não disponível para consulta.');
        }
    }

    // Método para executar uma transferência
    executarTransferencia(valor, destinatario) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            destinatario.saldo += valor;
            console.log(`Transferência de R$ ${valor.toFixed(2)} realizada para ${destinatario.nome}`);
            this.consultarSaldo(); // Mostra o saldo após a transferência
        } else {
            console.log('Saldo insuficiente para realizar a transferência.');
        }
    }

    // Método para ocultar o saldo
    ocultarSaldo() {
        this.saldoVisivel = false;
        console.log('Saldo ocultado com sucesso.');
    }
}
// Exemplo de criação de objetos Cliente
let cliente1 = new Cliente('João', '123.456.789-00', '01/01/1990', 1000.00);
let cliente2 = new Cliente('Maria', '987.654.321-00', '15/05/1985', 500.00);

// Consultando saldo inicial
cliente1.consultarSaldo(); // Saída: Saldo atual: R$ 1000.00

// Realizando transferência entre clientes
cliente1.executarTransferencia(500.00, cliente2); // Saída: Transferência de R$ 500.00 realizada para Maria
// Saída adicional: Saldo atual: R$ 500.00 (depois da transferência)

// Ocultando saldo do cliente1
cliente1.ocultarSaldo(); // Saída: Saldo ocultado com sucesso.

// Tentando consultar saldo após ocultar
cliente1.consultarSaldo(); // Saída: Saldo oculto. Não disponível para consulta.
