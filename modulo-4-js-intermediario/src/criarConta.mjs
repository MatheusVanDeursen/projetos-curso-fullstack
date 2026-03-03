export function criarConta(listaContas){
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