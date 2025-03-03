import java.util.Scanner;

public class CH02_P06_armstrong_number {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the number : ");
        int n = sc.nextInt();
        int temp_n = n;
        int digits = 0;

        while (n > 0) {

            digits++;
            n /= 10;
        }
        System.out.println(" Total digits : " + digits);

        n = temp_n;
        double sum = 0;
        int rem;
        while(n>0)
        {
            rem = n%10;
            sum = sum + Math.pow(rem,digits);

            n/=10;
        }

        if(sum==temp_n)
        {
            System.out.println(temp_n+" is armstrong..");
        }
        else{
            System.out.println(temp_n+" is not armstrong..");
        }

    }
}
