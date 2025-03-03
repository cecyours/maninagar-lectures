import java.util.Scanner;

public class S01_P03_tables {
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);

        int n;

        System.out.print("Enter number : ");
        n = sc.nextInt();

        for(int i=1;i<=10;i++)
        {
            System.out.println(n+" x "+i+" = "+(n*i));
        }
    }
}
