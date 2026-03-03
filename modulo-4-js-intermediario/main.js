////////////////////////////////////////////// CLASSES

class Transacao{
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

class Pessoa{
    nome;
    email;
    dataNasc;
    constructor(nome,email,dataNasc) {
        this.nome = nome;
        this.email = email;
        this.dataNasc = dataNasc;
    }
}

class Conta extends Pessoa{
    agencia;
    conta;
    tipo_conta;
    saldo;
    senha;
    transacoes = [];

    constructor(nome,email,dataNasc,agencia,conta,tipo_conta,saldo,senha,transacoes){
        super(nome,email,dataNasc);
        this.agencia = agencia;
        this.conta = conta;
        this.tipo_conta = tipo_conta;
        this.saldo = saldo;
        this.senha = senha;
        this.transacoes = transacoes;
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
        if(transacao.tipo=="Crédito"){
            this.transacoes.push(transacao);
            this.saldo += transacao.valor;
            return "Transação realizada com sucesso!";
        }else{
            if(this.saldo < transacao.valor){
                return "Saldo insuficiente! Operação cancelada!";
            }else{
                this.transacoes.push(transacao);
                this.saldo += transacao.valor;
                return "Transação realizada com sucesso!";
            }
        }
    }

}

////////////////////////////////////////////// SERVICES

function loginBanco(listaContas){
    let agencia = prompt("Informe a agência:");
    let conta = prompt("Informe a conta:");
    let tipo_conta =  parseInt(prompt("Informe o tipo de conta (1-Corrente / 2-Poupança):"));
    switch(tipo_conta){
        case 1:
            tipo_conta = "Corrente";
            break;
        case 2:
            tipo_conta = "Poupança";
            break;
        default:
            console.log("Opção inválida! Tente fazer login novamente!");
            return;
    }
    let senha = prompt("Informe a senha:");

    for(let i=0;i<listaContas.length;i++){
        if(listaContas[i].loginUsuario(agencia,conta,tipo_conta,senha)){
            return listaContas[i];
        }
    }
    return null;
}

function criarConta(listaContas){
    let nome = prompt("Informe o nome:");
    let email = prompt("Informe o e-mail:");
    let dataNasc = prompt("Informe a data de nascimento (DD/MM/AAAA):");
    let agencia =  prompt("Informe a agência:");
    let conta =  prompt("Informe a conta:");
    let tipo_conta =  parseInt(prompt("Informe o tipo de conta (1-Corrente / 2-Poupança):"));
    switch(tipo_conta){
        case 1:
            tipo_conta = "Corrente";
            break;
        case 2:
            tipo_conta = "Poupança";
            break;
        default:
            console.log("Opção inválida! Tente criar a conta novamente!");
            return;
    }
    let saldo =  parseFloat(prompt("Informe o saldo inicial:"));
    if(isNaN(saldo)||saldo<0){
        console.log("Saldo inválido! Operação cancelada!");
        return;
    }
    let senha = prompt("Informe a senha (no mínimo 8 caracteres):");
    if(senha.length<8){
        console.log("Senha inválida! Uma senha deve ter no mínimo 8 caracteres. Tente novamente!");
        return;
    }
    let transacoes = [];
    let novaConta = new Conta(nome,email,dataNasc,agencia,conta,tipo_conta,saldo,senha,transacoes);
    listaContas.push(novaConta);
    console.log("Conta criada com sucesso!");
}

function menuConta(conta){
    let op = -1;
    do{
        console.log(`===== BEM-VINDO(A) ${conta.nome}! =====`);
        console.log("1 - Exibir dados bancários");
        console.log("2 - Ver histórico de transações");
        console.log("3 - Realizar transação");
        console.log("0 - Sair");
        op =  parseInt(prompt());
        switch(op){
            case 1:
                console.log("=========================")
                conta.exibirDados();
                console.log("=========================")
                break;

            case 2:
                for(let i=0;i<conta.transacoes.length;i++){
                    console.log("=========================");
                    conta.transacoes[i].resumoTransacao();
                }
                console.log("=========================");
                break;

            case 3:
                let tipo =  parseInt(prompt("Informe o tipo de transação (1-Débito / 2-Crédito):"));
                switch(tipo){
                    case 1:
                        tipo = "Débito";
                        break;
                    case 2:
                        tipo = "Crédito";
                        break;
                    default:
                        console.log("Opção inválida! Operação cancelada!");
                        return;
                }
                let data = prompt("Informe a data da transação (DD/MM/AAAA):");
                let descricao = prompt("Informe a descrição da transação:");
                let valor =  parseFloat(prompt("Informe o valor da transação:"));

                if (isNaN(valor)||valor<0) {
                    console.log("Valor inválido! Operação cancelada!");
                } else {
                    let transacao = new Transacao(tipo,data,descricao,valor);
                    console.log(conta.realizarTransacao(transacao));//Realiza a transação e retorna a situação da operação
                }
                break;

            case 0:
                break;

            default:
                console.log("Opção inválida! Tente novamente!");
                break;
        }
    }while(op!=0);
}

////////////////////////////////////////////// MAIN

let op = 0;

let listaContas = [];
let transacao1 = new Transacao("Débito","10/12/2024","Pagamento de boleto",150.00);
let transacao2 = new Transacao("Crédito","11/12/2024","Depósito de salário",2000.00);
let transacao3 = new Transacao("Débito","12/12/2024","Compra no supermercado",80.50);
let transacao4 = new Transacao("Crédito","12/12/2024","Transferência recebida",500.00);

listaContas.push(new Conta("Caio","caio@gmail.com","23/05/1996","0001","12345-6","Corrente",252.22,"MinhaSenha",[transacao1,transacao2]));
listaContas.push(new Conta("Maria","maria@gmail.com","15/09/1989","0001","67890-1","Poupança",1500.00,"Senha123",[transacao3]));
listaContas.push(new Conta("João","joao@hotmail.com","07/03/1980","0002","11223-4","Corrente",500.50,"JoaoSenha",[transacao4,transacao1]));
listaContas.push(new Conta("Ana","ana@hotmail.com","12/11/1992","0003","44556-7","Corrente",800.00,"SenhaAna",[transacao2,transacao3]));


do{
    console.log("===== MENU BANCO =====");
    console.log("1 - Entrar em conta");
    console.log("2 - Criar conta");
    console.log("0 - Sair");
    op = parseInt(prompt("Digite a opção:"));
    switch(op){
        case 1:
            let conta = loginBanco(listaContas);
            if(conta == null){
                console.log("Conta não encontrada! Verifique os dados e tente novamente.");
            }else{
                menuConta(conta);
            }
            break;
        case 2:
            criarConta(listaContas);
            break;
        case 0:
            break;
        default:
            console.log("Opção inválida! Tente novamente!");
            break;
    }
}while(op!=0);

