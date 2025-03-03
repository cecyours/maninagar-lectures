public class CH10_P03_ObjectClass {
    public static void main(String[] args) {

        Book b = new Book();

        b.showThis();

        System.out.println("toString " + b);
        System.out.println("toHash " + b.hashCode());
    }
}

class Book {

    String name = "Kites";

    @Override
    public String toString() {
        System.out.println("i am auto call..");
        return super.toString();
    }

    @Override 
    public int hashCode(){
        System.out.println("call via middle ware");
        return super.hashCode();
    }

    void showThis() {
        System.out.println("I am local " + this);
    }
}
