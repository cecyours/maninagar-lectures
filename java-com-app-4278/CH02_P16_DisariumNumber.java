import java.util.Scanner;

public class CH02_P16_DisariumNumber {
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);

        // Prompt user to enter the number
        System.out.print("Enter the number: ");
        int number = sc.nextInt();

        // Check if the number is a disarium number
        if (isDisariumNumber(number)) {
            System.out.println(number + " is a disarium number.");
        } else {
            System.out.println(number + " is not a disarium number.");
        }
    }

    // Function to calculate the power of a number
    public static int power(int base, int exponent) {
        int result = 1;
        for (int i = 0; i < exponent; i++) {
            result *= base;
        }
        return result;
    }

    // Function to check if the number is a disarium number
    public static boolean isDisariumNumber(int num) {
        int sum = 0;
        int originalNum = num;
        int length = String.valueOf(num).length();
        
        while (num != 0) {
            int digit = num % 10;
            sum += power(digit, length);
            num /= 10;
            length--;
        }

        return sum == originalNum;
    }
}
