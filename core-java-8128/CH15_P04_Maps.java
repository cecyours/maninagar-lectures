import java.util.*;

public class CH15_P04_Maps {
    public static void main(String[] args) {
        
        Map<String,Double> student = new HashMap<>();

        student.put("Aman Bhai", 49.0);
        student.put("Gk", 39.0);
        
        System.out.println(student);

        System.out.println("Aman bhai : "+student.get("Aman Bhai"));
    }
}
