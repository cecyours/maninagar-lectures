
public class CH07_P07_Anonymous {
    public static void main(String[] args) {
        System.out.println("Hello, World!");

        Task t = new Task();
        t.execute("Write a program");
    }
}

interface Todo{
    void doSomething(String taskName);
}


class Task{

    void execute(String taskName){
        
        Todo t = new Todo() {
            @Override
            public void doSomething(String taskName) {
                System.out.println("i am doing this Task " + taskName);
            }
        };

        t.doSomething(taskName);

        Todo t2 = new Todo() {
            @Override
            public void doSomething(String taskName) {
                System.out.println("I am done" + taskName);
            }
        };

        t2.doSomething(taskName);
    }
}

