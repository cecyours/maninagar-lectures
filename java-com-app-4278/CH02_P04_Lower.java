import java.util.Scanner;

public class CH02_P04_Lower {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the String : ");
        String x = sc.nextLine();

        System.out.println("The lowercase is : " + x.toLowerCase());
        System.out.println("The uppercase is : " + x.toUpperCase());
        System.out.println("The replace is : " + x.replace('a','*'));

        StringBuffer s = new StringBuffer(x);
        System.out.println("  The reverse is : " + s.reverse());

        System.out.println("----------------- --------- -----------");

        System.out.println("the first letter : " + x.toCharArray()[2]);
    }
}
