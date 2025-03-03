import java.util.Scanner;

public class CH02_P23_series {
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the start number : ");
        int start = sc.nextInt();


        System.out.print("Enter the end number : ");
        int end = sc.nextInt();

        for(int i=start;i<=end;i+=2)
        {
            System.out.println(" "+i+", "+(i*i));
        }
    }
}
