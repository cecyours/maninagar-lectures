public class CH06_P01_Student {

    public static void main(String[] args) {
       
        Student s = new Student();

        s.wishMe();

        // String k;
        // System.out.println("hello "+k);
    }
 
}

class Student {

    // data member
    String name;
    int n;

    // member function=> method;

    void wishMe() {
        System.out.println("Hello " + name+ " , "+n);
    }

}
