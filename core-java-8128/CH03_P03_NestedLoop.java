import java.util.Scanner;

public class CH03_P03_NestedLoop {
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);

        int start,end,n,i,j;

        System.out.print("Enter the start : ");
        start = sc.nextInt();

        System.out.print("Enter the end : ");
        end = sc.nextInt();

        for(j=1;j<=10;j++)
        {
            for(i=start;i<=end;i++)
            {
                n = i;
                System.out.printf("%2d x %2d = %2d\t",n,j,n*j);
            }
            System.err.println();
        }
    }
}
