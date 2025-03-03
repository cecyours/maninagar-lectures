import java.util.Scanner;

public class CH02_P01_ScannerExample {
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        String name;
        int rollNo;
        String subject;

        System.out.print("Enter the name : ");
        name = sc.nextLine();

        System.out.print("Enter the roll No : ");
        rollNo = sc.nextInt();

        System.out.print("Enter the subject : ");
        subject = sc.nextLine();

        System.out.println("name : "+name+", "+rollNo+" with "+subject+" kied");
    }
}
