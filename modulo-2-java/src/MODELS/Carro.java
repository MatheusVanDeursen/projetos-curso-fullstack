package MODELS;


public class Carro {
    private String modelo,fabricante,cor,placa,data_final;
    private int ano,aluguel,id;
    
    public Carro(int id,String modelo,String fabricante,String cor,String placa,int ano,int aluguel){
        this.id = id;
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.cor = cor;
        this.placa = placa;
        this.ano = ano;
        this.aluguel = aluguel;
    }
    
    public Carro(){}

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getFabricante() {
        return fabricante;
    }

    public void setFabricante(String fabricante) {
        this.fabricante = fabricante;
    }

    public String getCor() {
        return cor;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }

    public int getAno() {
        return ano;
    }

    public void setAno(int ano) {
        this.ano = ano;
    }

    public String getPlaca() {
        return placa;
    }

    public void setPlaca(String placa) {
        this.placa = placa;
    }

    public int getAluguel() {
        return aluguel;
    }

    public void setAluguel(int aluguel) {
        this.aluguel = aluguel;
    }   

    public String getData_final() {
        return data_final;
    }

    public void setData_final(String data_final) {
        this.data_final = data_final;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
    
}
