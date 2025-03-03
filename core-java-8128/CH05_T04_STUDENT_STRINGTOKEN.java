import java.util.StringTokenizer;

public class CH05_T04_STUDENT_STRINGTOKEN {
    public static void main(String[] args) {

        String k = "Hello!! How are you??";
        StringTokenizer s = new StringTokenizer(k," ");

        while (s.hasMoreTokens()) {
            System.out.println(s.nextToken());
        }
    }
}
