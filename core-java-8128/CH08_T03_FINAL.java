public class CH08_T03_FINAL {
    public static void main(String[] args) {
        Mission m = new Mission();

        System.out.println("ID : " + m.id);
        m.display();

        Impossible i = new Impossible();
        i.show();
    }
}

final class Impossible {
    void show() {
        System.out.println("Helllooooo!!");
    }
}

class Mission {
    final int id = 111;

    final void display() {
        System.out.println("Hello!! I'm using Final Keyword!!");
    }
}