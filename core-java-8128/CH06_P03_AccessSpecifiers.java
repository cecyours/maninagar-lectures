public class CH06_P03_AccessSpecifiers {
    public static void main(String[] args) {

        Task t = new Task();

        t.setId(30);
        t.display();
    }
}

class Task {

    int time;
    private int id;
    public String name;
    protected String k;

    void setId(int id) {
        this.id = id;
    }

    void display() {
        System.out.println("level : " + id);
    }

}
