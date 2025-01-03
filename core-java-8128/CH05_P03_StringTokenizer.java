import java.util.StringTokenizer;

public class CH05_P03_StringTokenizer {
    public static void main(String[] args) {
        
        String sentence = "Hello World i am king";
        StringTokenizer st = new StringTokenizer(sentence,"l");


        while (st.hasMoreTokens()) {
            
            // Object k = st.nextElement();
            // System.out.println(", "+k);
            System.out.println(st.nextToken());
        }
    }
}
