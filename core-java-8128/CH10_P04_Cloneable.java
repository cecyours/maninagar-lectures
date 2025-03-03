public class CH10_P04_Cloneable {
    public static void main(String[] args) throws CloneNotSupportedException {

        Student s1 = new Student("Ramesh");

        Student s2 = (Student) s1.clone();

        s2.name = "Gk";
        System.out.println("s1 : " + s1);
        System.out.println("s2 : " + s2);
    }
}

class Student implements Cloneable {

    String name;

    public Student(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return this.name;
    }

    @Override
    public Object clone() throws CloneNotSupportedException {

        return super.clone();
    }
}
