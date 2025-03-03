import java.util.Scanner;

public class CH02_P07_pronic {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the number : ");
        int n = sc.nextInt();

        boolean is_pronic = false;

        int i;
        for (i = 1; i <= n; i++) {
            if (i * (i + 1) == n) {
                is_pronic = true;
                break;
            }
        }

        if (is_pronic) {
            System.out.println(i + " and " + (i + 1) + " are pronical for " + n);
        } else {
            System.out.println(n + " is not pronic");
        }

    }
}
