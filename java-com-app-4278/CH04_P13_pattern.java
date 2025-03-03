public class CH04_P13_pattern {
    public static void main(String[] args) {

        int n = 7;
        int i, j;

        for (i = 1; i <= n; i++) {
            for (j = 1; j <= n; j++) {

                if (i <= j)
                    System.out.print(" * ");
                else {
                    System.out.print("   ");

                }
            }
            System.out.println();

        }

        for (i = 1; i < n; i++) {
            for (j = n - 1; j > i; j--) {

                System.out.print("   ");
            }
            for (j = 0; j <= i; j++) {
                System.out.print(" * ");

            }
            System.out.println();
        }

    }
}
