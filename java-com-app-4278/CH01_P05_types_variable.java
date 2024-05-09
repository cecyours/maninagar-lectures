
/**
 * CH01_P05_types_variable
 */
public class CH01_P05_types_variable {

    // instance
    int red = 10009;

    // static
    static int green = 2999;

    public static void main(String[] args) {

        // local : due to inside the method main
        int blue = 2999;

        // final : which cant change during whole program
        final int orange = 39;

        // orange = 600;

        // we must declare object for access instance variable
        CH01_P05_types_variable s = new CH01_P05_types_variable();

        System.out.println("i am blue " + blue);
        System.out.println("i am red " + s.red); // access instance variable
        System.out.println("i am green " + green); // access static variable
        System.out.println("i am green " + s.green); // access static variable

        System.out.println("i am orange "+orange);

    }
}