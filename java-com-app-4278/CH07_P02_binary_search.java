public class CH07_P02_binary_search {
    public static void main(String[] args) {

        int data[] = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
        int key = 3;

        int i = find_binary(data, key);
        System.out.println("data " + key + " at index " + i);

    }

    static int find_binary(int data[], int key) {

        int start = 0;
        int end = data.length - 1;

        while (start <= end) {
            int mid = (start + end) / 2;
            System.out.println("checking at " + mid);

            if (data[mid] == key) {
                return mid;
            }

            if (key < data[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }

        return -1;
    }
}
