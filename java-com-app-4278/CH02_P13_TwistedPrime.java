import java.util.Scanner;

public class CH02_P13_TwistedPrime {
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);

        // Prompt user to enter the number
        System.out.print("Enter the number: ");
        int number = sc.nextInt();

        // Check if the number is a twisted prime number
        if (isTwistedPrime(number)) {
            System.out.println(number + " is a twisted prime number.");
        } else {
            System.out.println(number + " is not a twisted prime number.");
        }
    }

    // Function to check if a number is prime
    public static boolean isPrime(int num) {
        if (num <= 1) {
            return false;
        }
        for (int i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }

    // Function to reverse the digits of a number
    public static int reverseNumber(int num) {
        int reversed = 0;
        while (num != 0) {
            int digit = num % 10;
            reversed = reversed * 10 + digit;
            num /= 10;
        }
        return reversed;
    }

    // Function to check if a number is a twisted prime number
    public static boolean isTwistedPrime(int num) {
        // Check if the number is prime
        if (!isPrime(num)) {
            return false;
        }

        // Reverse the number
        int reversed = reverseNumber(num);

        // Check if the reversed number is prime
        return isPrime(reversed);
    }
}
