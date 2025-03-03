import java.util.Scanner;

public class CH01_P08_if_statement {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter your age : ");
        int age = sc.nextInt();
        if (age > 18) {
            System.out.println("Hello World..");
        }
        System.out.println("i am rest code "); // x
    }
}
