import java.util.Scanner;

public class P09_Equal_to_product {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the number : ");
        int n = sc.nextInt();

        int sum = 0;
        int prod = 1;
        int temp = n;

        for ( int t = temp; t > 0; t = t/10){
            int d = t % 10;
            sum = sum + d;
            prod = prod * d;
        }

        if (sum == prod){
            System.out.println(n + " is an spy number");
        }else{
            System.out.println(n + " is not spy number");
        }
    }
}