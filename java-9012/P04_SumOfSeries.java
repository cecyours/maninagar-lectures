import java.util.*;
public class P04_SumOfSeries{
    public static void main(String sl[]){

        int n,sum=0;

        Scanner sc= new Scanner(System.in);

        System.out.println("Enter  the number : ");
        n = sc.nextInt();

        for(int i=1;i<=n;i++)
        {
            sum = sum+i;
            System.out.println(i+" / "+n+" => "+sum);
        }

        System.out.println("result : "+sum);
    }
}