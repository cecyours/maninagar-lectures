import java.util.Scanner;

public class CH02_P22_SpecialNumbers {
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the number : ");
        int n = sc.nextInt();

        int temp_n = n;
        int digits_sum = 0;
        int digits_product = 1;

        int rem;
        while (n>0) {
            
            rem = n%10;

            digits_sum += rem;
            digits_product*=rem;

            n/=10;
        }

        if(digits_sum+digits_product==temp_n)
        {
            System.out.println("Special number");
        }
        else{
            System.out.println("Not a Special number");

        }
    }
}
