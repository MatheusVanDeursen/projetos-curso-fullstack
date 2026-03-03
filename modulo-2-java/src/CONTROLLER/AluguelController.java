package CONTROLLER;

import CONFIG_DB.ConnMySQL;
import MODELS.*;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

public class AluguelController {
    
    public static void getAluguelPorCliente(Cliente cliente, ArrayList<Aluguel> alugueis){
        Connection conexao = ConnMySQL.conexao();
        String sql = "SELECT * FROM aluguel WHERE id_cliente LIKE " + cliente.getId();
        try{
            Statement statement = conexao.createStatement();
            ResultSet result = statement.executeQuery(sql);
            int i = 0;
            while(result.next()){
                i++;
                Aluguel a = new Aluguel( 
                        result.getInt("id"),
                        result.getInt("id_cliente"),
                        result.getInt("id_carro"),
                        result.getInt("preco"),
                        result.getString("data_inicial"),
                        result.getString("data_final")
                );
                alugueis.add(a);
            }           
            conexao.close();
        }catch(SQLException throwables){
            throwables.printStackTrace();
        }
    }
    
    public static void imprimir(Aluguel aluguel){
        System.out.println("Id do pedido: " + aluguel.getId());
        System.out.println("Id Cliente: " + aluguel.getId_cliente());
        System.out.println("Id Carro: " + aluguel.getId_carro());
        System.out.println("Preço: R$" + aluguel.getPreco());
        System.out.println("Data Inicial: " + aluguel.getData_inicial());
        System.out.println("Data Final: " + aluguel.getData_final());
    }
    
}
