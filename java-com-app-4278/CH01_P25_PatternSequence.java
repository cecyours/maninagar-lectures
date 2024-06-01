import java.util.Scanner;

public class CH01_P25_PatternSequence {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the terms : ");
        int n = sc.nextInt();

        int counter = 1;
        int i, j;
        for (i = 1; i <= n; i++) {
            for (j = 1; j <= i; j++) {
                System.out.printf(" %2d ", counter++);
            }
            System.out.println();
        }

    }
}
