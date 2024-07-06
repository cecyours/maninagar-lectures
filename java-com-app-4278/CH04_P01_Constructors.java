public class CH04_P01_Constructors {
    public static void main(String[] args) {
        
        Student s = new Student();
        // Student s = new Student(1,"Rohan");
        System.out.println("the value of id : "+s.id);
        System.out.println("the value of id : "+s.name);
    }
}

class Student{
    int id;
    String name;

    public Student()
    {
        id = 3;
        name = "master";
    }

    public Student(int id, String name)
    {
        this.id = id;
        this.name = name;
    }

}
