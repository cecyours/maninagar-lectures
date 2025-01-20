public class CH07_T05_STATIC {

    static{
        System.out.println("Static block");
    }
    public static void main(String[] args) {
        
        System.out.println("Hello World");

        Student s1 = new Student(1000);

        System.out.println("S1 Count : "+s1.myfees);

        Student s2 = new Student(1500);

        System.out.println("S2 Count : "+s2.myfees);

        System.out.println("Total fees : "+Student.total_fees);
        
        System.out.println("Count : "+Student.count);

        Student.display();


    }
}

class Student{
    static int count=0;
    int myfees = 0;
    static int total_fees=0;
    public Student(int myfees){
        count++;
        this.myfees=myfees;
        this.total_fees+=myfees;
    }

    static void display(){
        System.out.println("Count: "+count);
    }
}