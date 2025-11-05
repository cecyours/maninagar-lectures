import java.util.Scanner;
public class Calculator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.println("1. Addition");
        System.out.println("2. Subtraction");
        System.out.println("3. Multiplication");
        System.out.println("4. Division");

        System.out.print("Enter Your Choice (1-4): ");
        int Choice = sc.nextInt();

        System.out.print("Enter First Number: ");
        int num1 = sc.nextInt();


        System.out.print("Enter Second Number: ");
        int num2 = sc.nextInt();

        if(Choice == 1) {
            System.out.print("Sum = " + (num1 + num2));
        }else if(Choice == 2) {
            System.out.print("Difference = " + (num1 - num2));
        }else if(Choice == 3) {
            System.out.print("Product = " + (num1 * num2));
        }else if(Choice == 4) {
            if (num2 != 0) {
                System.out.print("Quotient = " + (num1 / num2));
            } else {
                System.out.print("Error: Division by zero is not allowed.");
            }                       
        }else {
            System.out.print("Invalid Choice.");
        }
    }
}