import java.util.Scanner;

public class CH03_P01_operators {
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        char ch;

        System.err.print("Enter the Character : ");
        ch = sc.nextLine().charAt(0);
        
        
        if(ch>='a' && ch<='z')
        {
            System.out.println("lowecase alphabets...");
        }
        else if(ch>='A' && ch<='Z')
        {
            System.out.println("uppercase alphabets...");
        }
        else if(ch>='0' && ch<='9')
        {
            System.out.println("digits");
        }
        else {
            System.out.println("Special Symbols..");
        }
    }
}
