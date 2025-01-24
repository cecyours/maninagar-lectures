public class CH10_P01_type_casting {
    public static void main(String[] args) {

        float k = 8.4f; // narrowing type cast, need to mension the type

        int i = 9;

        float f = i; //  widening  ....

        System.out.println("float : " + k);
        System.out.println("int : " + i);
        System.out.println("float : " + f);

    }
}
