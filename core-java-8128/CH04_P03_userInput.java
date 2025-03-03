import java.util.Scanner;

public class CH04_P03_userInput {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int row, col;

        System.out.print("Enter the row  : ");
        row = sc.nextInt();

        System.out.print("Enter the col  : ");
        col = sc.nextInt();

        int a[][] = new int[row][col];
        int i, j;
        System.out.println("================");
        for (i = 0; i < row; i++) {
            for (j = 0; j < col; j++) {
                System.out.print("Enter the data : ");
                a[i][j] = sc.nextInt();
            }
        }

        System.out.println("================");
        for (i = 0; i < row; i++) {
            for (j = 0; j < col; j++) {
                System.out.print(" " + a[i][j]);
            }
            System.out.println();
        }

    }
}
