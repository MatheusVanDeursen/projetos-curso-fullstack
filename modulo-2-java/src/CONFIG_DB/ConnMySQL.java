package CONFIG_DB;

import java.sql.*;

public class ConnMySQL {
    
    public static Connection conexao(){
        String server = "localhost";
        String port = "3306";
        String database = "locadoracarros";
        String user = "root";
        String pass = "";
        
        String url = "jdbc:mysql://"+server+":"+port+"/"+database;
        // jdbc:mysql//localhost:3306/locadoracarros
        
        Connection conn = null;
        
        try{
            Class.forName("com.mysql.jdbc.Driver");
            conn = DriverManager.getConnection(url,user,pass);
            
        }catch(ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }
        
        return conn;
    }
}