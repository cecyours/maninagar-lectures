public class CH18_P02_Deadlock {
    public static void main(String[] args) throws Exception {

        Task t1 =  new Task();
        Task t2 =  new Task();

        Walk w = new Walk(t2, t1);
        w.setName("Walk"); // t2
        w.start();
        // w.join();
        Run r = new Run(t1, t2); // t2
        r.setName("Run");
        r.start();
        w.join();
        r.join();

    }   
}

class Task {

    synchronized void perform1(Task t) { // y

        System.out.println(Thread.currentThread().getName() + " performing as perform 1");
        t.perform2();
        Util.sleep(1000);
        System.out.println(Thread.currentThread().getName() + " exit as perform 1");

    }

    synchronized void perform2() { // x
        System.out.println(Thread.currentThread().getName() + " performing as perform 2");
        Util.sleep(1300);
        System.out.println(Thread.currentThread().getName() + " exit as perform 2");
    }
}

class Walk extends Thread { // A
    Task t1;
    Task t2;

    public Walk(Task t1, Task t2) {
        this.t1 = t1;
        this.t2 = t2;
    }

    @Override

    public void run() {
        // ax => a(y)
        t1.perform1(t2);
    }
}

class Run extends Thread {
    Task t1;
    Task t2;

    public Run(Task t1, Task t2) {
        this.t1 = t1;
        this.t2 = t2;
    }

    @Override

    public void run() {
        t2.perform1(t1);
    }
}

class Util {

    static void sleep(long mili) {
        try {
            Thread.sleep(mili);
        } catch (Exception e) {
            System.out.println("nothing well");
        }
    }

}

// Ax -> y (Axy)
// Bx -> y (Bxy)
