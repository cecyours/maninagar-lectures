public class CH01_P02_Student {
    public static void main(String[] args) {
        
        Student s1 = new Student();
        s1.roll = 35;
        s1.name = "Shilpa";

        s1.display();

        Student s2 = new Student();
        s2.name = "jorge";
        s2.roll = 48;

        s2.display();
    }
}

class Student{

    // data - properties
    int roll;
    String name;

    void display() // process => method
    {
        System.out.println("Name : "+name+"\t "+roll);
    }
}
