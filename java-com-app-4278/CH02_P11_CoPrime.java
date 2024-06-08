import java.util.Scanner;

public class CH02_P11_CoPrime {
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);

        // Prompt user to enter the first number
        System.out.print("Enter the first number: ");
        int num1 = sc.nextInt();

        // Prompt user to enter the second number
        System.out.print("Enter the second number: ");
        int num2 = sc.nextInt();

        // Find the GCD of the two numbers
        int gcd = findGCD(num1, num2);

        // Check if GCD is 1
        if (gcd == 1) {
            System.out.println(num1 + " and " + num2 + " are co-prime numbers.");
        } else {
            System.out.println(num1 + " and " + num2 + " are not co-prime numbers.");
        }
    }

    // Function to find GCD using Euclidean algorithm
    public static int findGCD(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
}
