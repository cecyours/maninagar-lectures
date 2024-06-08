import java.util.Scanner;

public class CH02_P15_NeonNumber {
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);

        // Prompt user to enter the number
        System.out.print("Enter the number: ");
        int number = sc.nextInt();

        // Check if the number is a neon number
        if (isNeonNumber(number)) {
            System.out.println(number + " is a neon number.");
        } else {
            System.out.println(number + " is not a neon number.");
        }
    }

    // Function to check if the number is a neon number
    public static boolean isNeonNumber(int num) {
        // Calculate the square of the number
        int square = num * num;

        // Calculate the sum of the digits of the square
        int sumOfDigits = 0;
        while (square > 0) {
            int digit = square % 10;
            sumOfDigits += digit;
            square /= 10;
        }

        // Check if the sum of the digits is equal to the original number
        return sumOfDigits == num;
    }
}
