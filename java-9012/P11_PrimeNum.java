import java.util.Scanner;

public class P11_PrimeNum {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter number : ");
        int n = sc.nextInt();

        int count=0;

        for(int i = 1; i <= n; i++ ){
            if (n % i == 0){
                count = count + 1;
            }
        }

        if (count == 2)
            System.out.print( n + "is a  prime num");
        else 
            System.out.print( n + "is not a prime num");
        
        
    }
}