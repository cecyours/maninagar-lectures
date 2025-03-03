import java.util.Scanner;

public class fifth {
    public static void main(String args[]) {
        int a[], n, count_pos=0, count_neg=0;

        Scanner sc = new Scanner(System.in);
        System.out.print("Enter value of arr:- ");
        n = sc.nextInt();
        a = new int[n];
        
        for(int j=0; j<n; j++){
            System.out.println("Enter value");
            a[j] = sc.nextInt();
        }
        for (int i = 0; i < n; i++) {
            if (a[i] > 0) {
                System.out.println("The pos number is: " + a[i]);
                count_pos++;

            }

            else if (a[i] == 0) {
                System.out.println("Num is zero");
            } 
            else {
                System.out.println("The neg number is: " + a[i]);
                count_neg++;
            }

        }

        System.out.println("The pos num is"+count_pos);
        System.out.println("The neg num is"+count_neg);

    }

}