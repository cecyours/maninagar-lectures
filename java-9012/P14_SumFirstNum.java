import java.util.Scanner;

public class P14_SumFirstNum {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter number : ");
        int n = sc.nextInt();

        int sum=0;

        for(int i = 1; i <= n; i++){
                sum = sum + ( 2 * i );
        }

        System.out.print("Sum of first number " + n + "even number =" + sum );
        
    }
}