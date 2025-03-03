import java.util.Scanner;

public class CH01_P22_for_loop {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter start value : ");
        int start = sc.nextInt();

        System.out.print("Enter end value : ");
        int end = sc.nextInt();

        int i;
        for (i = start; i <= end; i++) {
            System.out.println("line " + i);
        }
    }
}
