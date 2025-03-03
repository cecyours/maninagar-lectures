public class CH07_P03_sort_array {
    public static void main(String[] args) {

        int x[] = { 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 9, 8, 76, 5, 4, 3 };
        Task t = new Task();

        for (int i = 0; i < x.length; i++) {
            System.out.print(x[i] + ", ");
        }
        t.sort(x);
        System.out.println();
        for (int i = 0; i < x.length; i++) {
            System.out.print(x[i] + ", ");

        }
    }
}

class Task {

    void sort(int a[]) {

        int temp;

        for (int i = 0; i < a.length; i++) {
            for (int j = i + 1; j < a.length; j++) {
                if (a[i] > a[j]) {
                    temp = a[i];
                    a[i] = a[j];
                    a[j] = temp;
                }
            }
        }
    }
}
