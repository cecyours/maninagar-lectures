public class CH01_P23_nested_loop {
    public static void main(String[] args) {

        int n = 5;
        int i, j;

        for (i = 1; i <= n; i++) {

            for (j = 1; j <= i; j++) {
                
                System.out.print(" * ");

                // if (i == j)
                //     System.out.print(" * ");
                // else {
                //     System.out.print("   ");
                // }
            }
            System.out.println();
        }
    }
}
