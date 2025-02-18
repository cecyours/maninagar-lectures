import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class CH15_T02_HASHMAP {
    public static void main(String[] args) {
        HashMap<String,String> h = new HashMap<>();

        h.put("Shivang", "Python");
        h.put("Vishnu", "Java");
        h.put("Kishan", "Nodejs");
        h.put("Aditya", "Flutter");

        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter value to find : ");
        String s =sc.nextLine();

        for(Map.Entry<String,String> m : h.entrySet())
        {
            if(s.equalsIgnoreCase(m.getValue()))
            System.out.println(m.getKey()+" : \t"+m.getValue());
        }
    }
}
