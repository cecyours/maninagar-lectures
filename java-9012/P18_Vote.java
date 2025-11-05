import java.util.Scanner;

public class P18_Vote {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        System.out.print("enter age ");
        int age = sc.nextInt();

        if(age >= 18) {
            System.out.print("Vote");                    
        }else {
            System.out.print("not");
        }
        
    }
}