import java.util.Scanner;

public class CH02_P10_spy_number {
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the number : ");
        int n = sc.nextInt();

        
        int digits_sum = 0;
        int digits_product = 1;

        int rem;
        while (n>0) {
            
            rem = n%10;

            digits_sum += rem;
            digits_product*=rem;

            n/=10;
        }

        if(digits_sum==digits_product)
        {
            System.out.println("Spy number");
        }
        else{
            System.out.println("Stupid number");

        }
    }
}
