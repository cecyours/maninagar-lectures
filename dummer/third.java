import java.util.Scanner;

public class third {
    public static void main(String[] args) {

        int n1, n2;

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter start number : ");
        n1 = sc.nextInt();

        System.out.print("Enter end number ");
        n2 = sc.nextInt();

        for (int j = 1; j <= 10; j++) {
            
            for (int i = n1; i <= n2; i++) {
                int n = i;
                System.out.printf("%2d x %2d = %2d \t", n, j, n * j);
            }
            System.out.println();
        }

    }

}
