/* Single Inheritance */
public class CH08_P01_inheritance {
    public static void main(String[] args) {
        

        B b = new B();

        b.display();
        b.task();

    }
}

class A{

    void task()
    {
        System.out.println(this+" i am task");
    }
};

class B extends A{

    void display()
    {
        System.out.println(this+" i am display");
    }
}
