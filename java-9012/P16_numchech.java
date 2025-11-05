import java.util.Scanner;

public class P16_numchech {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        System.out.print("enter number ");
        int a = sc.nextInt();

        if(a < 10){
            System.out.print("Single digit");
        }

        if(a >= 10 && a < 100){
            System.out.print("double digit");
        }

        if(a >= 100 && a < 1000){
            System.out.print("triple digit");
        }
        
    }
}