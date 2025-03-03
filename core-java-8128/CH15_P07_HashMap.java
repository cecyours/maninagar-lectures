import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class CH15_P07_HashMap {
    public static void main(String[] args) {

        HashMap<String, String> student = new HashMap<>();

        student.put("Ramesh", "Python");
        student.put("Raju", "Java");
        student.put("Aman Bhai", "Java");
        student.put("Mohan", "Php");
        student.put("Neha", "Python");

        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the subject name : ");
        String subject = sc.nextLine();
        for (Map.Entry<String, String> s : student.entrySet()) {

            if (subject.equalsIgnoreCase(s.getValue()))
                System.out.println(s.getKey() + "\t" + s.getValue());
        }

    }
}
