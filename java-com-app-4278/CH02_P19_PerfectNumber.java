import java.util.Scanner;

public class CH02_P19_PerfectNumber {
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);

        // Prompt user to enter the number
        System.out.print("Enter the number: ");
        int number = sc.nextInt();

        // Check if the number is a perfect number
        if (isPerfectNumber(number)) {
            System.out.println(number + " is a perfect number.");
        } else {
            System.out.println(number + " is not a perfect number.");
        }
    }

    // Function to check if the number is a perfect number
    public static boolean isPerfectNumber(int num) {
        int sum = 0;
        
        // Find proper divisors and sum them up
        for (int i = 1; i < num; i++) {
            if (num % i == 0) {
                sum += i;
            }
        }

        // Check if the sum equals the original number
        return sum == num;
    }
}
