import java.util.Scanner;

public class P05_palindrome {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter a Number: ");
        int n = sc.nextInt();

        int rev = 0;
        int temp = n;

        for ( int t = temp; t > 0; t = t/10){
            rev = rev * 10 + ( t % 10); 
        }

        if ( rev == n ){
            System.out.println(n + "Is a Palindrome Number");
        }else {
            System.out.println(n + "Is not a palindrome Number");
        }
    }
}
