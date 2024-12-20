import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class CH02_P02_BufferedReader {
    public static void main(String[] args) throws IOException {
        
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String name;
        int rollNo;
        String subject;

        System.out.print("Enter the name : ");
        name = br.readLine();

        System.out.print("Enter the roll No : ");
        rollNo = Integer.parseInt(br.readLine());

        System.out.print("Enter the subject : ");
        subject = br.readLine();

        System.out.println("name : "+name+", "+rollNo+" with "+subject+" kied");


    }
}
