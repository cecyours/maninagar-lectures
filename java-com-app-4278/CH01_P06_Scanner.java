

/**
 * CH01_P06_Scanner
 */
import java.util.Scanner;
public class CH01_P06_Scanner {

    public static void main(String[] args) {
        

        Scanner sc = new Scanner(System.in);

        System.out.println("Enter a number : ");
        
        short i = sc.nextShort();
        
        System.out.println("the number is : "+i);
    }
}