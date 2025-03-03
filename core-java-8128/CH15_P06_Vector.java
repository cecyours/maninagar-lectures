import java.util.Vector;

public class CH15_P06_Vector {
    public static void main(String[] args) {

        Vector<Integer> v = new Vector<>();

        v.add(11);
        v.add(12);
        v.add(13);
        v.add(14);
        v.add(15);

        v.remove(0);
        // v.remove(12);
        
        for (Integer i : v) {
            System.out.println(i);
        }
    }
}
