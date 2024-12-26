public class CH04_P02_2d_Array {

    public static void main(String[] args) {

        int a[][] = {
                { 1, 2, 3 },
                { 8, 7, 6 },
                { 9, 8, 7 }
        };

        for (int i = 0; i < a.length; i++) {
            for (int j = 0; j < a[i].length; j++) {
                System.out.print(" " + a[i][j]);
            }
            System.out.print("\n");
        }
    }
}
