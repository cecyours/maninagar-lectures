
import java.util.Scanner;

public class CH02_P24_neg_series {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the number : ");
        int n = sc.nextInt();

        int i = 0;
        while (n > 0) {
            i--;
            n--;
            System.out.println("The number : " + i);
        }

    }
}
