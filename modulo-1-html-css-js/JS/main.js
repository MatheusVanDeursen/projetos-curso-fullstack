//////////VARIÁVEIS
let listaCliente = [], listaLivros = [], listaFuncionarios = [], listaVendas = [];
let qtdAutorLivro = 1, qtdGeneroLivro = 1;
let selectedEstoque;
let selectedLivros, selectedFuncionarios, selectedClientes;



//////////PÁGINAS
function page(pagina){
    document.getElementById("pageHome").style.display = "none";
    document.getElementById("pageLivros").style.display = "none";
    document.getElementById("pageClientes").style.display = "none";
    document.getElementById("pageFuncionarios").style.display = "none";
    document.getElementById("pageEstoque").style.display = "none";
    document.getElementById("pageVendas").style.display = "none";
    switch(pagina){
        case 'home':
            document.getElementById("pageHome").style.display = "block";
            break;

        case 'livros':
            document.getElementById("pageLivros").style.display = "block";
            if(listaLivros.length>0){
                exibeLivros();
            }
            break;

        case 'clientes':
            document.getElementById("pageClientes").style.display = "block";
            if(listaCliente.length>0){
                exibeClientes();
            }
            break;
        
        case 'funcionarios':
            document.getElementById("pageFuncionarios").style.display = "block";
            if(listaFuncionarios.length>0){
                exibeFuncionarios();
            }
            break;
        
        case 'estoque':
            document.getElementById("pageEstoque").style.display = "block";
            if(listaLivros.length>0){
                exibeEstoques();
            }
            break;

        case 'vendas':
            document.getElementById("pageVendas").style.display = "block";
            break;
    }
}
page('home');



//////////CLASSES
class Pessoa{
    nome;
    telefone;
    email;
    cpf;
}

class Cliente extends Pessoa{
    constructor(nome,telefone,email,cpf){
        super();
        super.nome = nome;
        super.telefone = telefone;
        super.email = email;
        super.cpf = cpf;
    }
    imprime(){
        let impressao = "<strong>Nome do Cliente: </strong>" + this.nome + "<br>" +
                        "<strong>Telefone: </strong>" + this.telefone + "<br>" +
                        "<strong>Email: </strong>" + this.email + "<br>" +
                        "<strong>CPF: </strong>" + this.cpf + "<br>";
        
        return impressao;
    }
}

class Funcionario extends Pessoa{
    endereco;
    filiacao;
    constructor(nome,telefone,email,cpf,endereco,filiacao){
        super();
        super.nome = nome;
        super.telefone = telefone;
        super.email = email;
        super.cpf = cpf;
        this.endereco = endereco;
        this.filiacao = filiacao;
    }
    imprime(){
        let impressao = "<strong>Nome do Cliente: </strong>" + this.nome + "<br>" +
                        "<strong>Telefone: </strong>" + this.telefone + "<br>" +
                        "<strong>Email: </strong>" + this.email + "<br>" +
                        "<strong>CPF: </strong>" + this.cpf + "<br>" +
                        "<strong>Endereço: </strong>" + this.endereco + "<br>" +
                        "<strong>Filiação: </strong>" + this.filiacao + "<br>";
        
        return impressao;
    }
}

class Livro{
    titulo;
    autor;
    genero;
    preco;
    estoque;

    constructor(titulo,autor,genero,preco,estoque){
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.preco = preco;
        this.estoque = estoque;
    }
    imprime(){
        let impressao = "<strong>Título: </strong>" + this.titulo + "<br>" +
                        "<strong>Autor: </strong>" + this.autor + "<br>" +
                        "<strong>Gênero: </strong>" + this.genero + "<br>" +
                        "<strong>Preço: R$</strong>" + this.preco + "<br>" +
                        "<strong>Estoque: </strong>" + this.estoque + "<br>";
        
        return impressao;
    }
}

class Vendas{
    cliente;
    funcionario;
    livro;
    quantidade;
    lucro;
    constructor(cliente,funcionario,livro,quantidade,lucro){
        this.cliente = cliente
        this.funcionario = funcionario
        this.livro = livro
        this.quantidade = quantidade
        this.lucro = lucro
    }
    imprime(){
        let impressao = "<strong>Funcionário: </strong>" + this.funcionario + "<br>" +
                        "<strong>Cliente: </strong>" + this.cliente + "<br>" +
                        "<strong>Livro: </strong>" + this.livro + "<br>" +
                        "<strong>Vendeu: </strong>" + this.quantidade + " Unidades<br>" +
                        "<strong>Lucro: R$</strong>" + this.lucro + "<br>";
        
        return impressao;
    }
}

//////////FUNCTIONS

/////LIVROS

//FORM
function showFormLivro(){
    let form=document.getElementById("formLivro");
    if(form.style.display = "none"){
        form.style.display="block";
        document.getElementById("botaoLivroCadastrar").style.display="none";
    }
}

//CADASTRAR
function cadastraLivro(){

    let inputAutor = document.getElementsByName("inputAutorLiv");
    let autor = [];
    for(let i = 0; i<inputAutor.length ; i++){
        autor.push(inputAutor[i].value);
    }

    let inputGenero = document.getElementsByName("inputGeneroLiv");
    let genero = [];
    for(let i = 0; i<inputGenero.length ; i++){
        genero.push(inputGenero[i].value);
    }


    if(
    document.getElementById("inputTituloLiv").value != ""  &&
    document.getElementById("inputAutorLiv").value != ""  &&
    document.getElementById("inputGeneroLiv").value != "" &&
    document.getElementById("inputPrecoLiv").value != "" &&
    Number(document.getElementById("inputEstoqueLiv").value) > 0){
        listaLivros.push(new Livro(
            document.getElementById("inputTituloLiv").value,
            autor,
            genero,
            Number(document.getElementById("inputPrecoLiv").value).toFixed(2),
            document.getElementById("inputEstoqueLiv").value
        ));
        document.formLivro.reset();
        exibeLivros();
        
    } else {
        window.alert("TODOS OS CAMPOS SÃO OBRIGATÓRIOS");
    }
    console.log(listaLivros);
}

function exibeLivros(n){
    divlivro = document.getElementById("livrosCadastrados");
    if(n !== undefined){  
        divlivro.innerHTML = 
            '<div id="blocoCadastro"">' +
                '<h4>Livro</h4>' +
                listaLivros[n].imprime() +
            '</div>';
    }else{
        if(listaLivros.length==0){
            divlivro.style.textAlign = "center";
            divlivro.innerHTML =    '<br><br><br><br><br><br><br><br><br><br><br>' +
                                    'SEM LIVROS CADASTRADOS NO MOMENTO'
        }else{
            divlivro.style.textAlign = "left";
            if(listaLivros.length==1){
                divlivro.innerHTML = 
                '<div id="blocoCadastro"">' +
                    '<h4>Livro ' + 1 + '</h4>' +
                    listaLivros[0].imprime() +
                '</div>'
            }else{
                divlivro.innerHTML="";
                for(i=0; i<listaLivros.length; i++){
                    divlivro.innerHTML += 
                    '<div id="blocoCadastro"">' +
                        '<h4>Livro ' + Number(i+1) + '</h4>' +
                        listaLivros[i].imprime() +
                    '</div>'
                }
            }
        } 
    }
}
exibeLivros();

function validaLivro(){
    let divlivro = document.getElementById("livrosCadastrados");
    if(document.getElementById("procuraLivros").value!= ""){
        let achou = false;
        let ondeAchou = 0;
        for(let i = 0 ; i < listaLivros.length ; i++){
            if(listaLivros[i].titulo.toLowerCase().startsWith(document.getElementById("procuraLivros").value.toLowerCase())){
                achou = true;
                ondeAchou = i;
            }
        }
        if(achou){
            exibeLivros(ondeAchou);
        } else {
            divlivro.innerHTML = "<br><h5 class='erroValida'>LIVRO NÃO ENCONTRADO</h5>";
        }
    }else{
        exibeLivros();
    }
}

function addAutorLivro(){
    qtdAutorLivro++;
    let add =   '<div class="form-group" name="divAutorLivro">' +
                    '<label class="col-md-5 control-label" for="inputAutorLiv">Autor ' + qtdAutorLivro + '</label>'+
                    '<div class="col-md-5">'+
                        '<div class="input-group">'+
                            '<input id="inputAutorLiv" name="inputAutorLiv" type="text" class="form-control" placeholder="Nome">'+
                            '<span class="btn btn-success material-icons green" type="button" onclick="addAutorLivro()">control_point</span>'+
                            '<span class="btn btn-danger material-icons red" type="button" onclick="apagarAutorLivro()">remove_circle_outline</span>'+
                        '</div>' +
                    '</div>' +
                '</div>';
    
    document.getElementById("divAddAutorLivro").innerHTML += add;
}
function apagarAutorLivro(){
    let inputAutor = document.getElementsByName("divAutorLivro");

    if(inputAutor.length == 0){
        window.alert("Não é possível apagar todos os autores");
    } else {
        inputAutor[inputAutor.length-1].remove();
    }

    qtdAutorLivro--;
}

function addGeneroLivro(){
    qtdGeneroLivro++;
    let add =   '<div class="form-group" name="divGeneroLivro">' +
                    '<label class="col-md-5 control-label" for="inputGeneroLiv">Gênero ' + qtdGeneroLivro + '</label>'+
                    '<div class="col-md-5">'+
                        '<div class="input-group">'+
                            '<input id="inputGeneroLiv" name="inputGeneroLiv" type="text" class="form-control" placeholder="Drama, suspense...">'+
                            '<span class="btn btn-success material-icons green" type="button" onclick="addGeneroLivro()">control_point</span>'+
                            '<span class="btn btn-danger material-icons red" type="button" onclick="apagarGeneroLivro()">remove_circle_outline</span>'+
                        '</div>' +
                    '</div>' +
                '</div>';
    
    document.getElementById("divAddGeneroLivro").innerHTML += add;
}
function apagarGeneroLivro(){
    let inputGenero = document.getElementsByName("divGeneroLivro");

    if(inputGenero.length == 0){
        window.alert("Não é possível apagar todos os gêneros");
    } else {
        inputGenero[inputGenero.length-1].remove();
    }

    qtdGeneroLivro--;
}


/////CLIENTES

//FORM
function showFormCliente(){
    let form=document.getElementById("formCliente");
    if(form.style.display = "none"){
        form.style.display="block";
        document.getElementById("botaoClienteCadastrar").style.display="none";
    }
}

//CADASTRAR
function cadastraCliente(){
    if(
    document.getElementById("inputNomeCli").value != ""  &&
    document.getElementById("inputTelCli").value != ""  &&
    document.getElementById("inputEmailCli").value != "" &&
    document.getElementById("inputCpfCli").value != ""){
        listaCliente.push(new Cliente(
            document.getElementById("inputNomeCli").value,
            document.getElementById("inputTelCli").value,
            document.getElementById("inputEmailCli").value,
            document.getElementById("inputCpfCli").value
        ));
        document.formCliente.reset();
        exibeClientes();
        
    } else {
        window.alert("TODOS OS CAMPOS SÃO OBRIGATÓRIOS");
    }
    console.log(listaCliente);
}

function exibeClientes(n){
    divcliente = document.getElementById("clientesCadastrados");
    if(n !== undefined){  
        divcliente.innerHTML = 
            '<div id="blocoCadastro"">' +
                '<h4>Cliente</h4>' +
                listaCliente[n].imprime() +
            '</div>';
    }else{
        if(listaCliente.length==0){
            divcliente.style.textAlign = "center";
            divcliente.innerHTML =    '<br><br><br><br><br><br><br><br><br><br><br>' +
                                    'SEM CLIENTES CADASTRADOS NO MOMENTO'
        }else{
            divcliente.style.textAlign = "left";
            if(listaCliente.length==1){
                divcliente.innerHTML = 
                '<div id="blocoCadastro"">' +
                    '<h4>Cliente ' + 1 + '</h4>' +
                    listaCliente[0].imprime() +
                '</div>'
            }else{
                divcliente.innerHTML="";
                for(i=0; i<listaCliente.length; i++){
                    divcliente.innerHTML += 
                    '<div id="blocoCadastro"">' +
                        '<h4>Cliente ' + Number(i+1) + '</h4>' +
                        listaCliente[i].imprime() +
                    '</div>'
                }
            }
        } 
    }
}
exibeClientes();

function validaCliente(){
    let divcliente = document.getElementById("clientesCadastrados");
    if(document.getElementById("procuraClientes").value!= ""){
        let achou = false;
        let ondeAchou = 0;
        for(let i = 0 ; i < listaCliente.length ; i++){
            if(listaCliente[i].nome.toLowerCase().startsWith(document.getElementById("procuraClientes").value.toLowerCase())){
                achou = true;
                ondeAchou = i;
            }
        }
        if(achou){
            exibeClientes(ondeAchou);
        } else {
            divcliente.innerHTML = "<br><h5 class='erroValida'>CLIENTE NÃO ENCONTRADO</h5>";
        }
    }else{
        exibeClientes();
    }
}


/////FUNCIONÁRIOS

//FORM
function showFormFuncionario(){
    let form=document.getElementById("formFuncionario");
    if(form.style.display = "none"){
        form.style.display="block";
        document.getElementById("botaoFuncionarioCadastrar").style.display="none";
    }
}

//CADASTRAR
function cadastraFuncionario(){
    if(
    document.getElementById("inputNomeFun").value != ""  &&
    document.getElementById("inputTelFun").value != ""  &&
    document.getElementById("inputEmailFun").value != "" &&
    document.getElementById("inputCpfFun").value != "" &&
    document.getElementById("inputEnderecoFun").value != ""  &&
    document.getElementById("inputFiliacaoFun").value != ""
    ){
        listaFuncionarios.push(new Funcionario(
            document.getElementById("inputNomeFun").value,
            document.getElementById("inputTelFun").value,
            document.getElementById("inputEmailFun").value,
            document.getElementById("inputCpfFun").value,
            document.getElementById("inputEnderecoFun").value,
            document.getElementById("inputFiliacaoFun").value
        ));
        document.formFuncionario.reset();
        exibeFuncionarios();
        
    } else {
        window.alert("TODOS OS CAMPOS SÃO OBRIGATÓRIOS");
    }
    console.log(listaFuncionarios);
}

function exibeFuncionarios(n){
    divfuncionario = document.getElementById("funcionariosCadastrados");
    if(n !== undefined){  
        divfuncionario.innerHTML = 
            '<div id="blocoCadastro"">' +
                '<h4>Funcionário</h4>' +
                listaFuncionarios[n].imprime() +
            '</div>';
    }else{
        if(listaFuncionarios.length==0){
            divfuncionario.style.textAlign = "center";
            divfuncionario.innerHTML =      '<br><br><br><br><br><br><br><br><br><br><br>' +
                                            'SEM FUNCIONÁRIOS CADASTRADOS NO MOMENTO'
        }else{
            divfuncionario.style.textAlign = "left";
            if(listaFuncionarios.length==1){
                divfuncionario.innerHTML = 
                '<div id="blocoCadastro"">' +
                    '<h4>Funcionário ' + 1 + '</h4>' +
                    listaFuncionarios[0].imprime() +
                '</div>'
            }else{
                divfuncionario.innerHTML="";
                for(i=0; i<listaFuncionarios.length; i++){
                    divfuncionario.innerHTML += 
                    '<div id="blocoCadastro"">' +
                        '<h4>Funcionário ' + Number(i+1) + '</h4>' +
                        listaFuncionarios[i].imprime() +
                    '</div>'
                }
            }
        } 
    }
}
exibeFuncionarios();

function validaFuncionario(){
    let divfuncionario = document.getElementById("funcionariosCadastrados");
    if(document.getElementById("procuraFuncionarios").value!= ""){
        let achou = false;
        let ondeAchou = 0;
        for(let i = 0 ; i < listaFuncionarios.length ; i++){
            if(listaFuncionarios[i].nome.toLowerCase().startsWith(document.getElementById("procuraFuncionarios").value.toLowerCase())){
                achou = true;
                ondeAchou = i;
            }
        }
        if(achou){
            exibeFuncionarios(ondeAchou);
        } else {
            divfuncionario.innerHTML = "<br><h5 class='erroValida'>FUNCIONÁRIO NÃO ENCONTRADO</h5>";
        }
    }else{
        exibeFuncionarios();
    }
}


/////ESTOQUE

//FORM
function showFormEstoque(){
    let form=document.getElementById("formEstoque");
    if(form.style.display = "none"){
        form.style.display="block";
        document.getElementById("botaoEstoqueCadastrar").style.display="none";
    }
}

//CADASTRAR
function exibeEstoques(n){
    divestoque = document.getElementById("estoquesCadastrados");
    if(n !== undefined){  
        divestoque.innerHTML = 
            '<div id="blocoCadastro" name="estoque">' +
                '<h4>Livro</h4>' +
                listaLivros[n].imprime() +
                '<br>' +
                '<div class="form-group">' +
                    '<div class="col-md-4">' +
                        '<button onclick="selectEstoque('+n+')" class="btn btn-dark" id="botaoSelectEstoque'+n+'" name="botaoSelectEstoque">SELECIONAR</button>' +
                    '</div>' +
                '</div>' +
            '</div>';
    }else{
        if(listaLivros.length==0){
            divestoque.style.textAlign = "center";
            divestoque.innerHTML =    '<br><br><br><br><br><br><br><br><br><br><br>' +
                                    'CADASTRE LIVROS PARA CONFIGURAR OS ESTOQUES AQUI'
        }else{
            divestoque.style.textAlign = "left";
            divestoque.innerHTML="";
            for(i=0; i<listaLivros.length; i++){
                divestoque.innerHTML += 
                '<div id="blocoCadastro" name="estoque">' +
                    '<h4>Livro ' + Number(i+1) + '</h4>' +
                    listaLivros[i].imprime() +
                    '<br>'+
                    '<div class="form-group">' +
                        '<div class="col-md-4">' +
                            '<button onclick="selectEstoque('+i+')" class="btn btn-dark btn-success" id="botaoSelectEstoque'+i+'" name="botaoSelectEstoque">SELECIONAR</button>' +
                        '</div>' +
                    '</div>' +
                '</div>';
            }
        } 
    }
}
exibeEstoques();

function validaEstoque(){
    let divestoque = document.getElementById("estoquesCadastrados");
    if(document.getElementById("procuraEstoques").value!= ""){
        let achou = false;
        let ondeAchou = 0;
        for(let i = 0 ; i < listaLivros.length ; i++){
            if(listaLivros[i].titulo.toLowerCase().startsWith(document.getElementById("procuraEstoques").value.toLowerCase())){
                achou = true;
                ondeAchou = i;
            }
        }
        if(achou){
            exibeEstoques(ondeAchou);
        } else {
            divestoque.innerHTML = "<br><h5 class='erroValida'>LIVRO NÃO ENCONTRADO</h5>";
        }
    }else{
        exibeEstoques();
    }
}

function selectEstoque(num){
    for(i=0; i<document.getElementsByName('estoque').length; i++){
        document.getElementsByName('estoque')[i].style.border="5px outset rgb(151, 151, 151)";
        document.getElementsByName('botaoSelectEstoque')[i].innerHTML = "SELECIONAR";
        document.getElementsByName('botaoSelectEstoque')[i].style.backgroundColor="#343a40";
    }


    if(selectedEstoque!=num){
        selectedEstoque=num;
        document.getElementsByName('estoque')[selectedEstoque].style.border="5px outset green";
        document.getElementById('botaoSelectEstoque'+selectedEstoque).innerHTML = "SELECIONADO";
        document.getElementsByName('botaoSelectEstoque')[selectedEstoque].style.backgroundColor="#28a745";
    }else{
        selectedEstoque=undefined;
    }
    console.log(selectedEstoque);
}

function cadastraEstoque(){
    if(selectedEstoque!=undefined){
        listaLivros[selectedEstoque].estoque = document.getElementById('inputEstoqueEst').value;
        exibeEstoques();
        selectedEstoque=undefined;
        document.formEstoque.reset();
    }
}


/////VENDAS

///FORM
function showFormVendas(){
    let form=document.getElementById("formVendas");
    if(form.style.display = "none"){
        form.style.display="block";
        document.getElementById("botaoVendasCadastrar").style.display="none";
    }
}

///CADASTRO

//VENDA CLIENTES
{
function exibeVendasCli(n){
    divcliente = document.getElementById("blocoSelectVendasCli");
    if(n !== undefined){  
        divcliente.innerHTML = 
            '<div id="blocoCadastro" name="clienteVendas">' +
                '<h4>Cliente</h4>' +
                listaCliente[n].imprime() +
                '<br>' +
                '<div class="form-group">' +
                    '<div class="col-md-4">' +
                        '<button onclick="selectVendasCli('+n+')" class="btn btn-dark" type="button" id="botaoSelectClienteVen">SELECIONAR</button>' +
                    '</div>' +
                '</div>' +
            '</div>';
    }
}

function selectVendasCli(num){
    document.getElementsByName('clienteVendas')[0].style.border="5px outset rgb(151, 151, 151)";
    document.getElementById('botaoSelectClienteVen').innerHTML = "SELECIONAR";
    document.getElementById('botaoSelectClienteVen').style.backgroundColor="#343a40";
    if(selectedClientes!=num){
        selectedClientes=num;
        document.getElementsByName('clienteVendas')[0].style.border="5px outset green";
        document.getElementById('botaoSelectClienteVen').innerHTML = "SELECIONADO";
        document.getElementById('botaoSelectClienteVen').style.backgroundColor="#28a745";
    }else{
        selectedClientes=undefined;
    }
    console.log(selectedClientes)
}

function validaVendasCli(){
    selectedClientes=undefined;
    let divcliente = document.getElementById("blocoSelectVendasCli");
    if(document.getElementById("inputClienteVen").value!= ""){
        let achou = false;
        let ondeAchou = 0;
        for(let i = 0 ; i < listaCliente.length ; i++){
            if(listaCliente[i].nome.toLowerCase().startsWith(document.getElementById("inputClienteVen").value.toLowerCase())){
                achou = true;
                ondeAchou = i;
            }
        }
        if(achou){
            exibeVendasCli(ondeAchou);
        } else {
            divcliente.innerHTML = "<br><h5 class='erroValida'>CLIENTE NÃO ENCONTRADO</h5><br>";
        }
    }else{
        divcliente.innerHTML="";
    }
}
}

//VENDA FUNCIONÁRIOS
{
    function exibeVendasFun(n){
        divfuncionario = document.getElementById("blocoSelectVendasFun");
        if(n !== undefined){  
            divfuncionario.innerHTML = 
                '<div id="blocoCadastro" name="funcionarioVendas">' +
                    '<h4>Funcionário</h4>' +
                    listaFuncionarios[n].imprime() +
                    '<br>' +
                    '<div class="form-group">' +
                        '<div class="col-md-4">' +
                            '<button onclick="selectVendasFun('+n+')" class="btn btn-dark" type="button" id="botaoSelectFuncionarioVen">SELECIONAR</button>' +
                        '</div>' +
                    '</div>' +
                '</div>';
        }
    }
    
    function selectVendasFun(num){
        document.getElementsByName('funcionarioVendas')[0].style.border="5px outset rgb(151, 151, 151)";
        document.getElementById('botaoSelectFuncionarioVen').innerHTML = "SELECIONAR";
        document.getElementById('botaoSelectFuncionarioVen').style.backgroundColor="#343a40";
        if(selectedFuncionarios!=num){
            selectedFuncionarios=num;
            document.getElementsByName('funcionarioVendas')[0].style.border="5px outset green";
            document.getElementById('botaoSelectFuncionarioVen').innerHTML = "SELECIONADO";
            document.getElementById('botaoSelectFuncionarioVen').style.backgroundColor="#28a745";
        }else{
            selectedFuncionarios=undefined;
        }
        console.log(selectedFuncionarios)
    }
    
    function validaVendasFun(){
        selectedFuncionarios=undefined;
        let divfuncionario = document.getElementById("blocoSelectVendasFun");
        if(document.getElementById("inputFuncionarioVen").value!= ""){
            let achou = false;
            let ondeAchou = 0;
            for(let i = 0 ; i < listaFuncionarios.length ; i++){
                if(listaFuncionarios[i].nome.toLowerCase().startsWith(document.getElementById("inputFuncionarioVen").value.toLowerCase())){
                    achou = true;
                    ondeAchou = i;
                }
            }
            if(achou){
                exibeVendasFun(ondeAchou);
            } else {
                divfuncionario.innerHTML = "<br><h5 class='erroValida'>FUNCIONÁRIO NÃO ENCONTRADO</h5><br>";
            }
        }else{
            divfuncionario.innerHTML="";
        }
    }
}

//VENDA LIVRO
{
    function exibeVendasLiv(n){
        divlivro = document.getElementById("blocoSelectVendasLiv");
        if(n !== undefined){  
            divlivro.innerHTML = 
                '<div id="blocoCadastro" name="livroVendas">' +
                    '<h4>Livros</h4>' +
                    listaLivros[n].imprime() +
                    '<br>' +
                    '<div class="form-group">' +
                        '<div class="col-md-4">' +
                            '<button onclick="selectVendasLiv('+n+')" class="btn btn-dark" type="button" id="botaoSelectLivroVen">SELECIONAR</button>' +
                        '</div>' +
                    '</div>' +
                '</div>';
        }
    }
    
    function selectVendasLiv(num){
        document.getElementsByName('livroVendas')[0].style.border="5px outset rgb(151, 151, 151)";
        document.getElementById('botaoSelectLivroVen').innerHTML = "SELECIONAR";
        document.getElementById('botaoSelectLivroVen').style.backgroundColor="#343a40";
        if(selectedLivros!=num){
            selectedLivros=num;
            document.getElementsByName('livroVendas')[0].style.border="5px outset green";
            document.getElementById('botaoSelectLivroVen').innerHTML = "SELECIONADO";
            document.getElementById('botaoSelectLivroVen').style.backgroundColor="#28a745";
        }else{
            selectedLivros=undefined;
        }
        console.log(selectedLivros)
    }
    
    function validaVendasLiv(){
        selectedLivros=undefined;
        let divlivro = document.getElementById("blocoSelectVendasLiv");
        if(document.getElementById("inputLivroVen").value!= ""){
            let achou = false;
            let ondeAchou = 0;
            for(let i = 0 ; i < listaLivros.length ; i++){
                if(listaLivros[i].titulo.toLowerCase().startsWith(document.getElementById("inputLivroVen").value.toLowerCase())){
                    achou = true;
                    ondeAchou = i;
                }
            }
            if(achou){
                exibeVendasLiv(ondeAchou);
            } else {
                divlivro.innerHTML = "<br><h5 class='erroValida'>LIVRO NÃO ENCONTRADO</h5><br>";
            }
        }else{
            divlivro.innerHTML="";
        }
    }
}


///VENDAS E EXIBE

function cadastraVendas(){
    if(
        selectedLivros!=undefined &&
        selectedClientes!=undefined &&
        selectedFuncionarios!=undefined &&
        document.getElementById('inputEstoqueVen').value!=""
    ){
        if(listaLivros[selectedLivros].estoque>=document.getElementById('inputEstoqueVen').value || document.getElementById('inputEstoqueVen').value<1){
            listaVendas.push(new Vendas(
                listaCliente[selectedClientes].nome,
                listaFuncionarios[selectedFuncionarios].nome,
                listaLivros[selectedLivros].titulo,
                document.getElementById('inputEstoqueVen').value,
                Number(listaLivros[selectedLivros].preco*document.getElementById('inputEstoqueVen').value).toFixed(2),
            ));
            listaCliente[selectedClientes].comprou+=document.getElementById('inputEstoqueVen').value;
            listaFuncionarios[selectedFuncionarios].vendeu+=document.getElementById('inputEstoqueVen').value;
            listaLivros[selectedLivros].estoque-=document.getElementById('inputEstoqueVen').value;
            exibeVendas();
            document.formVendas.reset();
            validaVendasLiv();
            validaVendasCli();
            validaVendasFun();
            selectedLivros=undefined;
            selectedClientes=undefined;
            selectedFuncionarios=undefined;
        }else{
            window.alert('ESTOQUE INSUFICIENTE OU INCORRETO')
        }
    }else{
        window.alert('SELECIONE / PREENCHA TODOS OS CAMPOS')
    }
}

function exibeVendas(n){
    document.getElementById("vendasCadastrados").innerHTML="";
    document.getElementById("vendasCadastrados").style.textAlign = "left";
    if(n !== undefined){  
        document.getElementById("vendasCadastrados").innerHTML = 
        '<div id="blocoCadastro" name="venda">' +
            '<h4>Venda </h4>' +
            listaVendas[n].imprime() +
        '</div>';
    }else{
        if(listaVendas.length==0){
            document.getElementById("vendasCadastrados").style.textAlign = "center";
            document.getElementById("vendasCadastrados").innerHTML =    '<br><br><br><br><br><br><br><br><br><br><br>'+
                                                                        'CADASTRE CLIENTES, FUNCIONARIOS E LIVROS PARA CADASTRAR VENDAS AQUI'
        }else{
            for(i=0; i<listaVendas.length; i++){
                document.getElementById("vendasCadastrados").innerHTML +=
                '<div id="blocoCadastro" name="venda">' +
                    '<h4>Venda ' + Number(i+1) + '</h4>' +
                    listaVendas[i].imprime() +
                '</div>';
            }
        }
    }
}
exibeVendas();

function validaVendas(){
    let divvendas = document.getElementById("menuCadastroVendas");
    if(document.getElementById("procuraVendas").value!= ""){
        let achou = false;
        let ondeAchou = 0;
        for(let i = 0 ; i < listaVendas.length ; i++){
            if(listaVendas[i].funcionario.toLowerCase().startsWith(document.getElementById("procuraVendas").value.toLowerCase())){
                achou = true;
                ondeAchou = i;
            }
        }
        if(achou){
            exibeVendas(ondeAchou);
        } else {
            divvendas.innerHTML = "<br><h5 class='erroValida'>VENDA NÃO ENCONTRADO</h5>";
        }
    }else{
        exibeVendas();
    }
}

/////HOME
function selectBotao(){
    if(document.getElementsByName('botaoBlocoHome')[0].innerHTML == "SELECIONADO"){
        document.getElementsByName('botaoBlocoHome')[0].innerHTML = "SELECIONAR";
        document.getElementsByName('blocoHome')[0].style.borderColor="rgb(151, 151, 151)";
        document.getElementsByName('botaoBlocoHome')[0].style.backgroundColor="#343a40";
    }else{
        document.getElementsByName('botaoBlocoHome')[0].innerHTML = "SELECIONADO";
        document.getElementsByName('blocoHome')[0].style.borderColor="green";
        document.getElementsByName('botaoBlocoHome')[0].style.backgroundColor="#28a745";
    }
}
