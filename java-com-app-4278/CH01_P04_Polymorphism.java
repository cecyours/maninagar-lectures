public class CH01_P04_Polymorphism {
    public static void main(String[] args) {

        Task t = new Task();

        t.msg();
        t.msg("polies");
        t.msg("denver");
    }
}

class Task {

    void msg() { //m1
        System.out.println("Hello There");
    }

    void msg(String name) { // m2
        System.out.println("Hello There " + name);
    }
}
