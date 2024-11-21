import java.util.Scanner;

public class S01_P04_square_pattern {
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter terms : ");
        int n = sc.nextInt();

        int i,j;

        for(i=0;i<n;i++)
        {
           for(j=0;j<n;j++)
            {
                System.out.print(" * ");
            }
            System.out.println();
       }
    }
}
