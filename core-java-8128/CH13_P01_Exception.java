public class CH13_P01_Exception {
    public static void main(String[] args) {

        Task t = new Task(3, 0);

        System.out.println("With div : " + t.div());
    }
}

class Task {

    int a, b;

    public Task(int a, int b) {
        this.a = a;
        this.b = b;
    }

    double div() {

        double s = 0;
        try {
            s = a / b;
        } catch (ArithmeticException e) {
            System.out.println("Dekh bhai, teri galti nahi h : " + e.getMessage());
            System.exit(1);
        
        }
        return s;
    }

}
