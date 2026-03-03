import {Transacao,Pessoa,Conta} from "./Classes.mjs";

function loginBanco(listaContas){
    let agencia = prompt("Informe a agência:");
    let conta = prompt("Informe a conta:");
    let tipo_conta = prompt("Informe o tipo de conta (1-Corrente / 2-Poupança):");
    tipo_conta = (tipo_conta ? "Corrente" : "Poupança");
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
    let agencia = prompt("Informe a agência:");
    let conta = prompt("Informe a conta:");
    let tipo_conta = prompt("Informe o tipo de conta (1-Corrente / 2-Poupança):");
    tipo_conta = (tipo_conta ? "Corrente" : "Poupança");
    let saldo = prompt("Informe o saldo inicial:");
    let senha = prompt("Informe a senha:");

    if(isNaN(saldo)||saldo<0){
        console.log("Saldo inválido. Operação cancelada.");
        return;
    }

    let novaConta = new Conta(nome,email,dataNasc,agencia,conta,tipo_conta,saldo,senha);
    listaContas.push(novaConta);
    console.log("Conta criada com sucesso!");
}

function menuConta(conta){
    let op = 0;
    do{
        console.log(`BEM-VINDO(A) ${conta.nome}!`);
        console.log("1 - Exibir dados bancários");
        console.log("2 - Ver histórico de transações");
        console.log("3 - Realizar transação");
        console.log("0 - Sair");
        op = prompt();
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
                let tipo = prompt("Informe o tipo de transação (1-Débito / 2-Crédito):");
                tipo = (tipo === "1") ? "Débito" : "Crédito";
                let data = prompt("Informe a data da transação (DD/MM/AAAA):");
                let descricao = prompt("Informe a descrição da transação:");
                let valor = prompt("Informe o valor da transação:");

                if (isNaN(valor)||valor<0) {
                    console.log("Valor inválido. Operação cancelada.");
                } else {
                    let transacao = new Transacao(tipo,data,descricao,valor);
                    conta.realizarTransacao(transacao);
                    console.log("Transação realizada com sucesso!");
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

export {loginBanco,criarConta,menuConta};