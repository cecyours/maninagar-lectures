import java.util.Scanner;
import java.util.HashSet;

public class CH02_P14_UniqueNumber {
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);

        // Prompt user to enter the number
        System.out.print("Enter the number: ");
        int number = sc.nextInt();

        // Check if the number is a unique number
        if (isUniqueNumber(number)) {
            System.out.println(number + " is a unique number.");
        } else {
            System.out.println(number + " is not a unique number.");
        }
    }

    // Function to check if the number is a unique number
    public static boolean isUniqueNumber(int num) {
        HashSet<Integer> digits = new HashSet<>();
        while (num > 0) {
            int digit = num % 10;
            // Check if digit is already in the set
            if (digits.contains(digit)) {
                return false;
            }
            digits.add(digit);
            num /= 10;
        }
        return true;
    }
}
