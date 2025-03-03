import java.util.Scanner;

public class S01_P02_loop {
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        
        int start,end;

        System.out.print("Enter start value : ");
        start = sc.nextInt();

        System.out.print("Enter end value : ");
        end = sc.nextInt();

        if(start>end)
        {
            System.out.println("invalid range");
            System.exit(0);
        }

        for(int i=start;i<=end;i++)
        {
            System.out.println(i);
        }
    }
}
