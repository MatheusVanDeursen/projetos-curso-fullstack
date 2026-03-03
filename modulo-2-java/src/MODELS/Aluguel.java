package MODELS;


public class Aluguel {
    private String data_inicial, data_final;
    private int id, id_carro, id_cliente, preco;
    
    public Aluguel(int id, int id_cliente, int id_carro, int preco, String data_inicial, String data_final){
        this.id = id;
        this.id_cliente = id_cliente;
        this.id_carro = id_carro;
        this.preco = preco;
        this.data_inicial = data_inicial;
        this.data_final = data_final;
    }

    public String getData_inicial() {
        return data_inicial;
    }

    public void setData_inicial(String data_inicial) {
        this.data_inicial = data_inicial;
    }

    public String getData_final() {
        return data_final;
    }

    public void setData_final(String data_final) {
        this.data_final = data_final;
    }

    public int getId_carro() {
        return id_carro;
    }

    public void setId_carro(int id_carro) {
        this.id_carro = id_carro;
    }

    public int getId_cliente() {
        return id_cliente;
    }

    public void setId_cliente(int id_cliente) {
        this.id_cliente = id_cliente;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getPreco() {
        return preco;
    }

    public void setPreco(int preco) {
        this.preco = preco;
    }  
    
}
