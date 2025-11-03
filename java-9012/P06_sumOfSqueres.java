import java.util.Scanner;

public class P06_sumOfSqueres {
    public static void main (String[] args){
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter the number: ");
        int n = sc.nextInt();

        int sum = 0;
        
        for ( int i = 1; i <= n; i++){
            sum = sum + (i * i);
        }
        System.out.println("Sum of the Squeres of first " + n + " numbers =" + sum );
    }
}