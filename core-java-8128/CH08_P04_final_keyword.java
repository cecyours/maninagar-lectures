public class CH08_P04_final_keyword {
    public static void main(String[] args) {

        Todo t = new Todo();
        // t.id = 400;

        System.out.println("id of todo : " + t.id);
        t.doTask();
    }
}

final class Task {

   final void doTask() { // cant override if extends 
        System.out.println("I am doing task...");
    }
}


class Todo /* extends Task  */{

    final int id = 299;
     

    void doTask(){ // method override
        System.out.println("I am doing very well task !!!");
    }
}
