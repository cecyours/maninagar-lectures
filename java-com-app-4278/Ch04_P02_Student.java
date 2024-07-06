public class Ch04_P02_Student {
    public static void main(String[] args) {
        Student obj = new Student();
        obj.display();
    }
    
}
class Student
{
    private int rn,w;
    private double h;
    Student()
    {
        rn = 1;
        h = 5.9;
        w = 75;
    }
    void display()
    {
        System.out.println("ROll number = "+rn);
        System.out.println("Height = "+h);
        System.out.println("Weight = "+w);
    }

}

