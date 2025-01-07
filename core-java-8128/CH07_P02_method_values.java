public class CH07_P02_method_values {
    public static void main(String[] args) {

        Subject p = new Subject("Python");

        Student s = new Student("Rohit", p);

        System.out.println("new subject : "+p.subjectName);
        System.out.println(s.studentName);
        System.out.println(s.subject.subjectName);

    }
}

class Student {
    String studentName;
    Subject subject;

    public Student(String  studentName,Subject subject)
    {
        this.studentName = studentName;
        this.subject = subject;
    }
}

class Subject {

    String subjectName;

    public Subject(String subjectName) {
        this.subjectName = subjectName;
    }
}