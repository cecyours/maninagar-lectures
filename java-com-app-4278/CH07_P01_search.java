public class CH07_P01_search {
    public static void main(String[] args) {

        int data[] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 };

        int val = 3;

        int i = find_leaner(data, val);

        System.out.println("data " + val + " at index " + i);
    }

    // leaner search
    static int find_leaner(int data[], int val) {
        for (int i = 0; i < data.length; i++) {
            System.out.println("checking at " + i);
            if (data[i] == val) {
                return i;
            }
        }

        return -1;
    }
}
