package CONTROLLER;

import CONFIG_DB.ConnMySQL;
import MODELS.Cliente;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

public class ClienteController {    
    
    public static void getAll(ArrayList<Cliente> clientes){
        Connection conexao = ConnMySQL.conexao();
        String sql = "SELECT * FROM cliente";
        try{
            Statement statement = conexao.createStatement();
            ResultSet result = statement.executeQuery(sql);
            int i = 0;
            while(result.next()){
                i++;
                Cliente c = new Cliente( 
                        result.getInt("id"),
                        result.getString("login"),
                        result.getString("cpf"),
                        result.getString("senha"),
                        result.getString("nome"),
                        result.getString("email"),
                        result.getString("telefone"),
                        result.getString("dtcadastro"),
                        result.getString("cep"),
                        result.getString("cidade"),
                        result.getString("rua"),
                        result.getInt("numero"),
                        result.getString("complemento")
                );
                clientes.add(c);
            }           
            conexao.close();
        }catch(SQLException throwables){
            throwables.printStackTrace();
        }
    }
    
    public static void cadastrar(Cliente c){             
        Connection conexao = ConnMySQL.conexao();       
        String sql = "INSERT INTO Cliente (cpf,login,senha,nome,email,telefone,dtcadastro,cep,cidade,rua,numero,complemento)" +
                     "VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
        
        try{
            PreparedStatement statement = conexao.prepareStatement(sql);
            statement.setString(1,c.getCpf());
            statement.setString(2,c.getLogin());
            statement.setString(3,c.getSenha());
            statement.setString(4,c.getNome());
            statement.setString(5,c.getEmail());
            statement.setString(6,c.getTelefone());
            statement.setString(7,c.getDtcadastro());
            statement.setString(8,c.getCep());
            statement.setString(9,c.getCidade());
            statement.setString(10,c.getRua());
            statement.setInt(11,c.getNumero());
            statement.setString(12,c.getComplemento());
            
            int linhas = statement.executeUpdate();
            
            if(linhas>0){
                System.out.println("\nCliente cadastrado com Sucesso!\n");
            }else{
                System.err.println("\nCliente não cadastrado.\n");
            }
        }catch(SQLException throwables){
            throwables.printStackTrace();
        }
    }
    
    public static void alterarSenha(String senha, int id){
        Connection conexao = ConnMySQL.conexao();
        String sql = "UPDATE `cliente` SET `senha` = '" + senha + "' WHERE `cliente`.`id` = " + id;
        try{
            PreparedStatement statement = conexao.prepareStatement(sql);
            
            int linhas = statement.executeUpdate();
            
            if(linhas>0){
                System.out.println("\nSenha alterada com Sucesso!\n");
            }else{
                System.err.println("\nSenha não alterada!\n");
            }
       
            conexao.close();
        }catch(SQLException throwables){
            throwables.printStackTrace();
        }
    }
}
