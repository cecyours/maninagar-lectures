import java.util.Scanner;

public class CH02_P09_Happy_number {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the number : ");
        int n = sc.nextInt();
 
        int digits = 0;
        int ans;
        do {

            int sum = 0;
            int rem;
            digits = 0;
            while (n > 0) {

                rem = n % 10;
                sum = sum + rem * rem;
                n /= 10;
                digits++;
            }

            n = sum;
            ans = sum;
            System.out.println("the numbe : " + ans + ", " + digits);
        } while (ans != 1 && digits != 1);

        if (ans == 1)
            System.out.println("the number is happy");
        else {
            System.out.println("the number is unhappy");

        }
    }
}
