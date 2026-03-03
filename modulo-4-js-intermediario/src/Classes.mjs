export class Transacao{
    tipo;
    data;
    descricao;
    valor;

    constructor(tipo,data,descricao,valor){
        this.tipo = tipo;
        this.data = data;
        this.descricao = descricao;
        this.valor = valor;
    }

    resumoTransacao(){
        console.log(`Tipo: ${this.tipo}`);
        console.log(`Data: ${this.data}`);
        console.log(`Descrição: ${this.descricao}`);
        console.log(`Valor: R$${this.valor}`);
    }
}

export class Pessoa{
    nome;
    email;
    dataNasc;
    constructor(nome,email,dataNasc) {
        this.nome = nome;
        this.email = email;
        this.dataNasc = dataNasc;
    }
}

export class Conta extends Pessoa{
    agencia;
    conta;
    tipo_conta;
    saldo;
    senha;
    transacoes = [];

    constructor(nome,email,dataNasc,agencia,conta,tipo_conta,saldo,senha){
        super(nome,email,dataNasc);
        this.agencia = agencia;
        this.conta = conta;
        this.tipo_conta = tipo_conta;
        this.saldo = saldo;
        this.senha = senha;
    }

    loginUsuario(agencia,conta,tipo_conta,senha){
        if(this.agencia==agencia && this.conta==conta && this.tipo_conta==tipo_conta && this.senha==senha){
            return true;
        }else{
            return false;
        }
    }

    exibirDados(){
        console.log(`Nome: ${this.nome}`);
        console.log(`Email: ${this.email}`);
        console.log(`Data de nascimento: ${this.dataNasc}`);
        console.log(`Agência: ${this.agencia}`);
        console.log(`Conta: ${this.conta}`);
        console.log(`Tipo de conta: ${this.tipo_conta}`);
        console.log(`Saldo: R$${this.saldo}`);
    }

    realizarTransacao(transacao){
        this.transacoes.push(transacao);
    }

}