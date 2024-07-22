import java.util.Scanner;

public class fourth {
    int n1,n2,n;

    Scanner sc = new Scanner(System.in);
    System.out.print("Enter value: ");
    n1 = sc.nextInt();

    System.out.print("Enter value ");
    n2 = sc.nextInt();

    for(int i=n1; i<=n2; i++){
        for(int j=n1; i<=n2; j++){
            n = j;
            System.out.printf("%2d x %2d = %2d \t", n, j, n * j);
        }
    }
}
