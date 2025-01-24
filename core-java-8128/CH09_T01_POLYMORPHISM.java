public class CH09_T01_POLYMORPHISM {
    public static void main(String[] args) {
        perform p = new perform();

        p.sum();
        p.sum(33,55);
    }
}

class check{
    void sum()
    {
        int a=9,b=11;
        System.out.println("Sum : "+(a+b));
    }
}
class perform extends check{
    void sum()
    {
        super.sum();
        int a=22;
        int b = 23;

        System.out.println("Sum of numbers : "+(a+b));
    }

    void sum(int a,int b)
    {
        System.out.println("Sum of two numbers : "+(a+b));
    }
}