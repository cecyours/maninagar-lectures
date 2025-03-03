import java.util.Scanner;

public class CH02_P18_NivenNumber {
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);

        // Prompt user to enter the number
        System.out.print("Enter the number: ");
        int number = sc.nextInt();

        // Check if the number is a Niven number
        if (isNivenNumber(number)) {
            System.out.println(number + " is a Niven number.");
        } else {
            System.out.println(number + " is not a Niven number.");
        }
    }

    // Function to calculate the sum of digits of a number
    public static int sumOfDigits(int num) {
        int sum = 0;
        while (num > 0) {
            sum += num % 10;
            num /= 10;
        }
        return sum;
    }

    // Function to check if the number is a Niven number
    public static boolean isNivenNumber(int num) {
        int sum = sumOfDigits(num);
        return num % sum == 0;
    }
}
