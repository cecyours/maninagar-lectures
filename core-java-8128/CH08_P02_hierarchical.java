
public class CH08_P02_hierarchical {
    public static void main(String[] args) {

        B b = new B();
        C c = new C();
    
        b.show();
        c.show();
    }
}

class A {

    void show() {
        System.out.println(this+" I am show from A");
    }

}

class B extends A {

    void show() {
        super.show();
        System.out.println(this+" I am show from B");

    }
}

class C extends A {

}