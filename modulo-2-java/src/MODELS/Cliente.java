package MODELS;

import java.util.Calendar;

public class Cliente {
    private String login,nome,senha,email,telefone,dtcadastro,cpf;
    private String cep,cidade,rua,complemento;
    private int numero, id;
    
    public Cliente(int id, String login, String cpf, String senha, String nome, String email, String telefone, String dtcadastro, 
                   String cep,String cidade, String rua, int numero, String complemento)
    {
        this.id = id;
        this.login = login;
        this.cpf = cpf;       
        this.senha = senha;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.dtcadastro = dtcadastro;
        this.cep = cep;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
        this.complemento = complemento;
    };
    
    public Cliente(){}

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }
    
    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    } 
    
    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }   

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getDtcadastro() {
        return dtcadastro;
    }

    public void setDtcadastro(String dtcadastro) {
        this.dtcadastro = dtcadastro;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }
    
    public String getRua() {
        return rua;
    }

    public void setRua(String rua) {
        this.rua = rua;
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public String getComplemento() {
        return complemento;
    }

    public void setComplemento(String complemento) {
        this.complemento = complemento;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
