public class CH15_P01_Collection {

    public static void main(String[] args) {

        String arr[] = { "Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape", "Honeydew", "Kiwi", "Lemon",
                "Mango", "Nectarine" };

        List s = new List(arr);
        for (String fruit : s.data) {
            System.out.println(fruit.toLowerCase());
        }

        System.out.println("-----------------------");
        s.append("Waterlemon");
        for (String fruit : s.data) {
            System.out.println(fruit.toLowerCase());
        }

    }
}

class List {

    String data[];

    public List(String data[]) {
        this.data = data;
    }

    public void append(String newName) {
        String newArray[] = new String[data.length + 1];
        int i = 0;
        for (i = 0; i < data.length; i++) {
            newArray[i] = data[i];
        }

        newArray[i] = newName;
        data = newArray;

    }

}