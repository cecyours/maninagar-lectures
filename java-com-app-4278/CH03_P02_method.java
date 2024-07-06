public class CH03_P02_method {

    static int sum(int x, int y) {
        return y + x;
    }


    static int sub(int x, int y) {
        return x - y;
    }


    public static void main(String[] args) {

        int a = 10;
        int b = 4;

        int c = sum(a, b);

        System.out.println("The ans is : "+c);

        System.out.println("random sum : "+sum(39,20));

    System.out.println("random sub : "+sub(39,20)); 
    }
}
