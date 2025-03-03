public class CH13_T01_EXCEPTION {
    public static void main(String[] args) {
        Task t= new Task(33, 0);
        t.remainder();
    }
}

class Task{
    int a,b;

    public Task(int a,int b)
    {
        this.a = a;
        this.b= b;
    }
    double remainder()
    {
        double s=0;
        try{
            s = a%b;
        }
        catch(ArithmeticException e) {
            System.out.println("Wrong denominator!!");
            System.exit(1);
        }

        return s;
    }
}