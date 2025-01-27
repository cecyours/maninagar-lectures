public class CH10_P02_generalization_specilazation {

    public static void main(String[] args) {
        
        // generalization (small->large : child to parent)

        A a;
        a = (B) new B();
        a.run();

        // 
        a = new B();
        
        B b =(B) a;

        b.run();
        b.walk();
    }
}


class A{

    void run()
    {
        System.out.println(this+" I am running as A");
    }

    void walk()
    {
        System.out.println(this+" I am walking as A");

    }
}

class B extends A{

    void run()
    {
        System.out.println(this+" I am running as B");
    }
}