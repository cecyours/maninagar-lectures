import java.util.Scanner;

public class P10_StringCheck {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter string : ");
        String str1 = sc.nextLine();

        System.out.print("Enter string : ");
        String str2 = sc.nextLine();
        
        System.out.println(" Are they equal ? " + str1.equals(str2) );
    }
}