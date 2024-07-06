public class Ch03_P04_callby {

    public static void main(String[] args) {

        CallByValue callByValue = new CallByValue();

        double a = 1000;

        System.out.println("my old salary : " + a);
        callByValue.increment(a);
        System.out.println("Final salary : " + a);



        System.out.println("----------------------------");
        

        CallByReference callByReference = new CallByReference();

        Rupees r = new Rupees();
        r.salary = a;

        System.out.println("my old salary : " + r.salary);
        callByReference.increment(r);
        System.out.println("Final salary : " + r.salary);


    }
}

class CallByValue {
    void increment(double x) {
        x = x + x * 0.10;
        System.out.println("My New salary : " + x);
    }
}

class CallByReference {
    void increment(Rupees x) {
        x.salary = x.salary + x.salary * 0.10;
        System.out.println("My New salary : " + x.salary);
    }
}

class Rupees{

    double salary;

}
