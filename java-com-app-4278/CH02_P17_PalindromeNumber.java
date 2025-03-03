import java.util.Scanner;

public class CH02_P17_PalindromeNumber {
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);

        // Prompt user to enter the number
        System.out.print("Enter the number: ");
        int number = sc.nextInt();

        // Check if the number is a palindrome number
        if (isPalindromeNumber(number)) {
            System.out.println(number + " is a palindrome number.");
        } else {
            System.out.println(number + " is not a palindrome number.");
        }
    }

    // Function to check if the number is a palindrome number
    public static boolean isPalindromeNumber(int num) {
        int reversed = 0;
        int originalNum = num;

        while (num > 0) {
            int digit = num % 10;
            reversed = reversed * 10 + digit;
            num /= 10;
        }

        return originalNum == reversed;
    }
}
