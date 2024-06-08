
import java.util.Scanner;

public class CH02_P25_SeriesGenerator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the number of terms in the series: ");
        int n = scanner.nextInt();

        System.out.println("Series:");
        int odd_number = 1;
        int last_number = 1;
        for (int i = -1; i <= n; i++,odd_number+=2) {
            int term =  last_number+odd_number;
            
            System.out.print(term);

            last_number = term;

            if (i != n) {
                System.out.print(", ");
            }
        }
    }
}
