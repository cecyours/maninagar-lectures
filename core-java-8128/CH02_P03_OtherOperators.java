import java.util.Scanner;

public class CH02_P03_OtherOperators {
    public static void main(String[] args) {
        
        Task t = new Task();
        Work w = new Work();
        
        // System.out.println(w instanceof Task);
        // System.out.println(t instanceof Task);
        boolean f = t instanceof Task;
        System.err.println("The instance : "+f);

        float a = Float.parseFloat("30.5");
        System.err.println("The value : "+a);
    }
}

class Task{

}

class Work{

}
