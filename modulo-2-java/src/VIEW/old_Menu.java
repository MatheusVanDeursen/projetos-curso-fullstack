package VIEW;

import SERVICES.Get;
import CONTROLLER.CarroController;
import CONFIG_DB.ConnMySQL;
import CONTROLLER.AluguelController;
import MODELS.*;
import java.sql.*;
import java.text.SimpleDateFormat;
import java.util.ArrayList;

public class old_Menu {
    public static void menu(Cliente cliente){
        while(0==0){
            System.out.println("######MENU######");
            System.out.println("(1)Alugar");
            System.out.println("(2)Histórico");
            System.out.println("(0)#SAIR#");
            System.out.print("Escolha uma opção: ");
            int op = Get.inteiro();
            switch (op){
                case 1:
                    menuAlugar(cliente);
                    break;
                case 2:
                    menuHistorico(cliente);
                    break;
                case 0:
                    System.exit(0);
                    break;
                default:
                    System.out.println("\nOpção inválida\n");
            }
        }
    }
    
    public static void menuAlugar(Cliente cliente){
        boolean b = true;
        while(b==true){
            ArrayList<Carro> carros = new ArrayList();
            CarroController.getAll(carros);
            System.out.println    ("-----CARROS DISPONÍVEIS----");
            for(int i=0; i < carros.size(); i++){
                System.out.println("---------------------------");
                System.out.println("Carro "+ (i+1) +": " + carros.get(i).getModelo());
            }

            System.out.print("Escolha um modelo para ver mais detalhes: ");
            int op = Get.inteiro();
            while(op > carros.size()){
                System.out.println("Opção inválida!");
                System.out.print("Escolha um carro para ver mais detalhes: ");
                op = Get.inteiro();
            }

            op--;
            System.out.println("------INFORMAÇÕES DO CARRO------");
            CarroController.imprimir(carros.get(op));
            System.out.println("---------------------------");

            System.out.println("VOCÊ DESEJA:");
            System.out.println("(1)Alugar este carro");
            System.out.println("(2)Olhar outros carros");
            System.out.println("(3)Voltar ao menu");
            System.out.println("Escolha uma opção: ");
           int escolha = Get.inteiro();
            switch (escolha){
                case 1:
                    Alugar(cliente,carros.get(op));
                    b=false;
                    break;
                case 2:                    
                    break;
                case 3:
                    b = false;
                    break;
                default:
                    System.out.println("\nOpção inválida\n");
            }
        }
            
    }
    
    public static void Alugar(Cliente cliente, Carro carro){
        java.util.Date data_inicial,data_final;           
        SimpleDateFormat sdfbarra = new SimpleDateFormat("dd/MM/yyyy");
        int dias = 1;
        try{             
            do{
                String temp;   
                SimpleDateFormat sdftraco = new SimpleDateFormat("dd-MM-yyyy");
               
                while(0==0){                   
                    System.out.print("Escolha a data inicial (dd/mm/aaaa):");
                    temp = Get.string();
                    if(temp.contains("-")){
                        data_inicial = sdftraco.parse(temp);
                        break;
                    }else{
                        if(temp.contains("/")){
                            data_inicial = sdfbarra.parse(temp);
                            break;
                        }else{
                            System.out.println("Modelo inválido de data! Tente novamente!");
                        }
                    }
                }

                while(0==0){                   
                    System.out.print("Escolha a data final (dd/mm/aaaa):");
                    temp = Get.string();
                    if(temp.contains("-")){
                        data_final = sdftraco.parse(temp);
                        break;
                    }else{
                        if(temp.contains("/")){
                            data_final = sdfbarra.parse(temp);
                            break;
                        }else{
                            System.out.println("Modelo inválido de data! Tente novamente!");
                        }
                    }
                }

                System.out.println("A data final é menor que a inicial! Tente novamente!");

            }while(data_final.compareTo(data_inicial)<0);

            Long diff = new Long(Math.round((data_final.getTime() - data_inicial.getTime()) / (double) 86400000));     
            dias += diff.intValue();
        } catch(Exception e){
            System.out.println("Um erro inesperado ocorreu!");
            System.out.println(e);
            return;
        }
        
        System.out.println("\n---------------------------");
        System.out.println("Data inicial: " + sdfbarra.format(data_inicial));
        System.out.println("Data final: " + sdfbarra.format(data_final));
        System.out.println("Tempo: " + dias + " dias.");
        System.out.println("Preço: R$" + (carro.getAluguel() * dias));       
        System.out.println("---------------------------");       
        System.out.println("Confirme a compra (1 - Sim / 2 - Não): ");
        int op = Get.inteiro();
        switch (op){
            case 1:
                Connection conexao = ConnMySQL.conexao();  
                String sql = "INSERT INTO Aluguel (id_cliente,id_carro,preco,data_inicial,data_final)" +
                             "VALUES (?,?,?,?,?)";
                try{
                    PreparedStatement statement = conexao.prepareStatement(sql);
                    statement.setInt(1, cliente.getId());
                    statement.setInt(2, carro.getId());
                    statement.setInt(3, carro.getAluguel()*dias);
                    statement.setString(4, sdfbarra.format(data_inicial));
                    statement.setString(5, sdfbarra.format(data_final));

                    int linhas = statement.executeUpdate();
                    if(linhas>0){
                        System.out.println("\nCarro alugado com Sucesso!\n");
                    }else{
                        System.err.println("\nCarro não alugado! Tente novamente!\n");
                    }
                }catch(SQLException throwables){
                    throwables.printStackTrace();
                }
                
                break;
            case 2:
                System.out.println("Compra cancelada!");
                break;
            default:
                System.out.println("\nOpção inválida\n");
        }
        
    }   
    
    public static void menuHistorico(Cliente cliente){
        ArrayList<Aluguel> alugueis = new ArrayList();
        AluguelController.getAluguelPorCliente(cliente,alugueis);
        if(alugueis!=null){
            System.out.println("---------HISTÓRICO---------");
            for(int i=0; i < alugueis.size(); i++){
                AluguelController.imprimir(alugueis.get(i));
                System.out.println("---------------------------");
            }
        }else{
            System.out.println("Não há histórico de pedidos.");
        }
    }
    
}