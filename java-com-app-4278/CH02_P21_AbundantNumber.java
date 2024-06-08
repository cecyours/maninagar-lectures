import java.util.Scanner;

public class CH02_P21_AbundantNumber {
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);

        // Prompt user to enter the number
        System.out.print("Enter the number: ");
        int number = sc.nextInt();

        // Check if the number is an abundant number
        if (isAbundantNumber(number)) {
            System.out.println(number + " is an abundant number.");
        } else {
            System.out.println(number + " is not an abundant number.");
        }
    }

    // Function to calculate the sum of proper divisors of a number
    public static int sumOfProperDivisors(int num) {
        int sum = 0;
        
        // Find proper divisors and sum them up
        for (int i = 1; i < num; i++) {
            if (num % i == 0) {
                sum += i;
            }
        }

        return sum;
    }

    // Function to check if the number is an abundant number
    public static boolean isAbundantNumber(int num) {
        return sumOfProperDivisors(num) > num;
    }
}
