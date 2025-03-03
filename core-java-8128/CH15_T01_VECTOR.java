import java.util.Vector;

public class CH15_T01_VECTOR {
    public static void main(String[] args) {
        Vector<String> v = new Vector<>();

        v.add("Python");
        v.add("Java");
        v.add("FLutter");
        v.add("NodeJs");

        for (String i : v) {
            System.out.println(i);
        }
    }
}
