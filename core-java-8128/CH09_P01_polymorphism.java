public class CH09_P01_polymorphism {
    public static void main(String[] args) {
        Todo t = new Todo();
        t.doTask();
        t.doTask("Programming");
    }
}

class Task {

    void doTask() // override
    {
        System.out.println("I am doint regular task with main");
    }
}

class Todo extends Task {

    void doTask() {
        super.doTask();
        System.out.println("I am doint regular task");
    }

    void doTask(String name) { // overload
        System.out.println("I am doint " + name + " task");

    }
}
