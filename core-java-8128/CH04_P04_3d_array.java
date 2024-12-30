import java.util.Scanner;

public class CH04_P04_3d_array {
    public static void main(String[] args) {
        
        Scanner sc =new Scanner(System.in);

        int t,r,c;
        
        t = Integer.parseInt(args[0]);
        r = Integer.parseInt(args[1]);
        c = Integer.parseInt(args[2]);
        
        int a[][][] = new int[t][r][c];

        int counter = 0;
        int i,j,k;
        
        for(i=0;i<t;i++)
        {
            for(j=0;j<r;j++)
            {
                for(k=0;k<c;k++)
                {
                    a[i][j][k] = ++counter;
                }
            }
        } 


        for(i=0;i<t;i++)
        {
            for(j=0;j<r;j++)
            {
                for(k=0;k<c;k++)
                {
                    System.out.printf(" %2d ",a[i][j][k]);
                }
                System.out.println();
            }
            System.out.println();
        } 


        // System.out.println(" "+a[2][0][1]);
    }
}
