package CONTROLLER;

import CONFIG_DB.ConnMySQL;
import MODELS.*;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.*;

public class CarroController {    
    
    public static void imprimir(Carro carro){
        System.out.println("Id: " + carro.getId());
        System.out.println("Modelo: " + carro.getModelo());
        System.out.println("Fabricante: " + carro.getFabricante());
        System.out.println("Cor: " + carro.getCor());
        System.out.println("Placa: " + carro.getPlaca());
        System.out.println("Ano: " + carro.getAno());
        System.out.println("Aluguel (diário): R$" + carro.getAluguel());
    } 
    
    public static void getAll(ArrayList<Carro> carros){
        Connection conexao = ConnMySQL.conexao();
        String sql = "SELECT * FROM carro";
        try{
            Statement statement = conexao.createStatement();
            ResultSet result = statement.executeQuery(sql);
            
            int i = 0;
            while(result.next()){
                i++;
                Carro c = new Carro(
                        result.getInt("id"),
                        result.getString("modelo"),
                        result.getString("fabricante"),
                        result.getString("cor"),
                        result.getString("placa"),
                        result.getInt("ano"),
                        result.getInt("aluguel")
                );
                carros.add(c);
            }           
            conexao.close();
        }catch(SQLException throwables){
            throwables.printStackTrace();
        }
    }
    
    public static void getCarroPorId(ArrayList<Carro> carros,int id){
        Connection conexao = ConnMySQL.conexao();
        String sql = "SELECT * FROM carro WHERE id LIKE " + id;
        try{
            Statement statement = conexao.createStatement();
            ResultSet result = statement.executeQuery(sql);
            int i = 0;
            if(result.next()){
                Carro carro = new Carro(
                        result.getInt("id"),
                        result.getString("modelo"),
                        result.getString("fabricante"),
                        result.getString("cor"),
                        result.getString("placa"),
                        result.getInt("ano"),
                        result.getInt("aluguel")
                );
                carros.add(carro);
            }         
            conexao.close();
        }catch(SQLException throwables){
            throwables.printStackTrace();
        }
    }
    
    public static void getCarrosPorX(ArrayList<Carro> carros, String x, String texto){
        Connection conexao = ConnMySQL.conexao();
        String sql = "SELECT * FROM carro WHERE " + x + " LIKE '" + texto + "%'";
        try{
            Statement statement = conexao.createStatement();
            ResultSet result = statement.executeQuery(sql);
            while(result.next()){
                Carro carro = new Carro(
                        result.getInt("id"),
                        result.getString("modelo"),
                        result.getString("fabricante"),
                        result.getString("cor"),
                        result.getString("placa"),
                        result.getInt("ano"),
                        result.getInt("aluguel")
                );
                carros.add(carro);
            }         
            conexao.close();
        }catch(SQLException throwables){
            throwables.printStackTrace();
        }
    }
    
    public static ArrayList<Carro> OrdenaCarros(ArrayList<Carro> carros){
        ArrayList<Carro> aux = carros;

        for(int i = 0; i< carros.size();i++){
            for(int j = 1; j < carros.size(); j++){
                if(aux.get(j).getModelo().compareTo(aux.get(j-1).getModelo()) <= -1){
                    Carro recebe = aux.get(j);
                    aux.set(j, aux.get(j-1));
                    aux.set(j-1,recebe);
                }
            }
        }
        return aux;
    }
   
}
