import java.util.Scanner;
public class CH01_P09_if_else_statement {
    
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter the number : ");
        int n = sc.nextInt();

        if(n%2==0)
        {
            System.out.println(n+" is even");
        }
        else{
            System.out.println(n+" is odd");
        }

        System.out.println("i am rest code...");
    }
}
