
import java.lang.*;
import java.util.Scanner;
public class CH01_P07_Math {
    public static void main(String[] args) {
        
        
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a number : ");
        double n1 = sc.nextDouble();


        System.out.print("Enter a number : ");
        double n2 = sc.nextDouble();

        double ans = Math.pow(n1, n2);

        System.out.println(n1+", "+n2+" power is "+ans);

    }
}
