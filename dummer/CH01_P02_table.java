import java.util.Scanner;

public class CH01_P02_table {
    public static void main(String[] args) {
        
        int n,i;

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a number : ");
        n = sc.nextInt();

        for(i=1;i<=10;i++)
        {
            System.out.println(n+" x "+i+" = "+(i*n));
        }
    }
}
