package SERVICES;

import java.util.*;

public class Get {
    public static int inteiro(){
        Scanner get = new Scanner(System.in);
        
        int valor;
        
        while(0==0){
            try{
                valor = get.nextInt();
                break;
            }catch(InputMismatchException e){
                System.out.println("\nApensa números inteiros");
                System.out.println("NÃO USE CASA DECIMAIS");
                System.out.println("Ex: 43654463");
                System.out.println("Tente novamente: ");
            }
        }
        return valor;
    }
    
    public static String string(){
        Scanner get = new Scanner(System.in);
        
        String texto;
        
        while(0==0){
            try{
                texto = get.nextLine();
                break;
            }catch(Exception e){
                System.out.println("\nAlgo deu errado");
                System.out.println("Use apenas caracters de texto");
                System.err.println(e);
                System.out.println("Tente novamente: ");
            }
        }
        return texto;
    }
}

