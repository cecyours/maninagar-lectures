public class CH08_T01_Single_Inheritance {
    public static void main(String[] args) {
        B b = new B();

        b.show();
    }
}

class A {
    void show() {
        System.out.println(this + " Hello I'm Class A!!");
    }
}

class B extends A {
    void show() {
        super.show();
        System.out.println(this + " Hello I'm Class B!!");
    }
}