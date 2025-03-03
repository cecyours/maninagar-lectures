import java.util.Scanner;

public class CH02_P20_DudeneyNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Prompt user to enter the number
        System.out.print("Enter the number: ");
        int number = sc.nextInt();

        // Check if the number is a Dudeney number
        if (isDudeneyNumber(number)) {
            System.out.println(number + " is a Dudeney number.");
        } else {
            System.out.println(number + " is not a Dudeney number.");
        }
    }

    // Function to calculate the sum of the cubes of digits of a number
    public static int sumOfCubesOfDigits(int num) {
        int sum = 0;
        while (num > 0) {
            int digit = num % 10;
            sum += (digit * digit * digit);
            num /= 10;
        }
        return sum;
    }

    // Function to check if the number is a Dudeney number
    public static boolean isDudeneyNumber(int num) {
        return sumOfCubesOfDigits(num) == num;
    }
}
