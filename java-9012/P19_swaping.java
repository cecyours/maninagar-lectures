import java.util.Scanner;

public class P19_swaping {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        System.out.print("enter number 1: ");
        int num1 = sc.nextInt();

        System.out.print("enter number 2: ");
        int num2 = sc.nextInt();

        int temp = 0;
        temp = num1;
        num1 = num2;
        num2 = temp;

        System.out.println("After Swapping....");
        System.out.println("value 1 number: " + num1);
        System.out.println("value 2 number: " + num2);
        
        
    }
}

