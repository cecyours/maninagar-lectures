public class CH04_P014_timer_pattern {
    public static void main(String[] args) {

        int n = 10;
        int i, j, k;
        int a = 65;

        for (i = 1; i <= n; i++) {
            for (k = 1; k < i; k++) {

                System.out.print(" ");
            }
            a=65;
            for (j = n; j >= i; j--) {
                System.out.printf(" %c",a++);
            }

            System.out.println();
        }

        for (i = 2; i <= n; i++) {
            for (k = n; k > i; k--) {

                System.out.print(" ");
            }
            a=65;
            for (j = 1; j <= i; j++) {
                System.out.printf(" %c",a++);
                
            }

            System.out.println();
        }
    }
}
