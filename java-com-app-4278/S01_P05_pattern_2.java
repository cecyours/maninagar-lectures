import java.util.Scanner;

public class S01_P05_pattern_2 {
    public static void main(String[] args) {
          
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter terms : ");
         int n = sc.nextInt();

        int i,j;

        for(i=0;i<n;i++)
        {
           for(j=0;j<n;j++)
            {   
                if((i+j)%2==0)
                {

                    System.out.print(" * ");
                }
                else{
                    System.out.print("   ");

                }
            }
            System.out.println();
       }
    }
}
