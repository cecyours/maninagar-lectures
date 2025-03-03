public class CH13_P04_Rethrow {

    public static void main(String[] args) throws MyException {

        try {

            throw new MyException();
        } catch (Exception e) {
            System.out.println("COde : " + e.getMessage());
            throw new MyException("Double cross");
        }
    }

}

class MyException extends Exception {

    public MyException() {
        super();
    }

    public MyException(String msg) {
        super(msg);
    }
}