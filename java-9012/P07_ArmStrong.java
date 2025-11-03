import java.util.Scanner;

public class P07_ArmStrong{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the number : ");
        int n = sc.nextInt();

        int sum = 0;
        int temp = n;

        for ( int t = temp; t > 0; t = t/10){
            int d = t % 10;
            sum = sum + (d * d * d);
        }

        if (sum == n){
            System.out.println(n + " is an armstrong number");
        }else{
            System.out.println(n + " is not armstrong number");
        }
    }
}