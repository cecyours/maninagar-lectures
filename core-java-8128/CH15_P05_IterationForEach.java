import java.util.*;
import java.util.List;

public class CH15_P05_IterationForEach {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        Set<String> data = new HashSet<>();

        String text;
        System.out.println("Type 'exit' for terminate : ");
        while (true) {
            System.out.print("Type : ");
            text = sc.nextLine();
            if (text.compareToIgnoreCase("exit") == 0) {
                break;
            }

            data.add(text);
            System.out.println("\n " + text + " added  +" + data.size());

        }

        /*  */
        System.out.println("----------: for-each : --------------");
        for (String s : data) {
            System.out.println(" => " + s);
        }

        System.out.println("\n\n----------: Itertion : --------------");

        Iterator<String> it = data.iterator();

        while (it.hasNext()) {
            System.out.println(" => " + it.next());

        }

        System.out.println("\n\n----------:List Itertion : --------------");

        List<String> list = new LinkedList<>();

        list.addAll(data);

        ListIterator<String> listIt = list.listIterator();

        String key;
        while (true) {

            System.out.print("Enter Option : ");
            key = sc.nextLine();

            if (key.equals("p")) {

                if (listIt.hasPrevious()) {
                    System.out.println(listIt.previous());
                } else {
                    System.out.println("No Previous Elements");
                }
            } else if (key.equals("n")) {

                if (listIt.hasNext()) {
                    System.out.println(listIt.next());
                } else {
                    System.out.println("No Next Elements");
                }
            } else {
                break;
            }
        }

        Enumeration<String> d = Collections.enumeration(list);

        while (d.hasMoreElements()) {
            System.out.println("Value : " + d.nextElement());
        }
        sc.close();
    }
}
