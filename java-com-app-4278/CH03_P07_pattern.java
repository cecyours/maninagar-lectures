
public class CH03_P07_pattern {

    public static void main(String[] args) {

        int n = 5;
        int i, j;

        for (i = 1; i <= 5; i++) {
            for (j = n; j > i; j--) {
                System.out.print("   ");
            }
            for (j = 1; j <= i; j++) {
                System.out.print(" * ");
            }
            for (j = 1; j < i; j++) {
                System.out.print(" * ");
            }

            System.out.println("");
        }
    }
}