import java.util.Scanner;

public class S01_P01_if_statements {
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter number : ");
        int n = sc.nextInt();

        if(n>0)
        {
            System.out.println(n+" is +ve");
        }
        else if(n<0)
        {
            System.out.println(n+" is -ve");
        }
        else{
            System.out.println(n+" is zero");
        }
    }
}
