import com.mypkgs.Student;

public class School {
    public static void main(String[] args) {

        Student s = new Student("Neha");

        s.read("Hello World");
        String content = s.write();

        System.out.println(s+" is writing "+content);
    }
}
