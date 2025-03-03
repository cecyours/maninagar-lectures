public class CH11_P01_Abtract {
    public static void main(String[] args) {

        Run r = new Run();
        r.toDo();

        Read read = new Read();
        read.toDo();

    }
}

abstract class Task {
    abstract void toDo();
}

class Run extends Task {

    void toDo() {
        System.out.println("I am Running..");
    }
}

class Read extends Task {

    void toDo() {
        System.out.println("I am Reading..");
    }
}
