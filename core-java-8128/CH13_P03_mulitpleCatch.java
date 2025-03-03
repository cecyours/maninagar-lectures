public class CH13_P03_mulitpleCatch {
    public static void main(String[] args) {

        Task t = new Task();

        t.perform(2, 2);
        t.perform(100, 3);
        t.perform(2, 0);
    }
}

class Task {

    int a[];

    void perform(int i, int b) {

        try {

            System.out.println("The final sum : " + (a[i] / b));
        } catch (ArithmeticException e) {
            System.out.println("ArithmeticException : " + e.getMessage());
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("ArrayIndexOutOfBoundsException : " + e.getMessage());
        } catch (Exception e) {
            System.out.println("Exceptionxxx : " + e.getMessage());

        }

    }

}
