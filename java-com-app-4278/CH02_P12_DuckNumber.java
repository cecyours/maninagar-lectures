import java.util.Scanner;

public class CH02_P12_DuckNumber {
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);

        // Prompt user to enter the number
        System.out.print("Enter the number: ");
        String number = sc.next();

        // Check if the number is a duck number
        if (isDuckNumber(number)) {
            System.out.println(number + " is a Duck number.");
        } else {
            System.out.println(number + " is not a Duck number.");
        }
    }

    // Function to check if the number is a Duck number
    public static boolean isDuckNumber(String number) {
        // Check if the first character is '0'
        if (number.charAt(0) == '0') {
            return false;
        }

        // Check if the number contains '0'
        for (int i = 1; i < number.length(); i++) {
            if (number.charAt(i) == '0') {
                return true;
            }
        }

        return false;
    }
}
