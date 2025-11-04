import java.util.Scanner;

public class P12_Niven {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter number : ");
        int n = sc.nextInt();

        int sum=0;
        int temp = n;

        for(int t = temp; t > 0; t = t / 10){
            sum = sum + t % 10;
        }

        if (n % sum == 0) {
            System.out.print( n + " Niven num");
        }else {
            System.out.print( n + " not a niven num");
        }
        
    }
}