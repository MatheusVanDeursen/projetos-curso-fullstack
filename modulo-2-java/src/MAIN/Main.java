package MAIN;

import CONFIG_DB.ConnMySQL;
import VIEW.*;

public class Main {
    public static void main(String[] args) {
        ConnMySQL.conexao();       
        Login login = new Login();
        login.setVisible(true);
        
    }
}
