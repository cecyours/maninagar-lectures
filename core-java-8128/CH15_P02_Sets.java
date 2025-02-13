import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;
import java.util.List;

public class CH15_P02_Sets {
    public static void main(String[] args) {

        Set<String> list = new HashSet<String>();

        String names[] = { "Banana", "Cherry", "Orrange" };
        List<String> l = new ArrayList<>();

        for (String string : names) {
            System.out.println("Denver kites "+string);
            l.add(string);
        }

        list.add("Apple");
        list.add("apple");
        list.add("AppLe");
        list.addAll(l);

        System.out.println(list);

        Iterator it = list.iterator();

        while (it.hasNext()) {
            System.out.println(it.next());
        }

        l.add("kites");
        System.out.println("Check : "+list.containsAll(l));


        Object data[] = list.toArray();
        for (Object s :data) {

            System.out.println(s);
        }   

    }
}
