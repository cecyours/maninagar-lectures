public class CH01_P16_nested_table {
    public static void main(String[] args) {

        int i;
        int j;
        for (i = 1; i <= 5; i++) {
            for (j = 1; j <= i; j++) {
                // System.out.println("Hello World.. "+i+", "+j);
                System.out.print(" * ");
                
            }
            System.out.println();
        }

    }
}
