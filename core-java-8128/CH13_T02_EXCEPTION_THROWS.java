import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class CH13_T02_EXCEPTION_THROWS {
    public static void main(String[] args) throws CloneNotSupportedException,IOException{

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        System.out.print("Enter the value of a : ");
        int a = Integer.parseInt(br.readLine());

        System.out.print("Enter the value of b : ");
        int b = Integer.parseInt(br.readLine());

        Task t = new Task(a, b);
        Task t2 =(Task) t.clone();


        System.out.println("Div : "+t.div());
        System.out.println("Div : "+t2.div());
    }
}


class Task implements Cloneable {

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

    @Override
    public Object clone() throws CloneNotSupportedException {
        return super.clone();
    }

}
