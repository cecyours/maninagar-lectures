public class CH07_P01_Method {
    public static void main(String[] args) {
        
        Task t = new Task();

        t.todo();

        t.todo("Play Games");

        boolean status = false;

        status = t.todo("Games", status);

        t.todo("Games",status);

    }
}

class Task{


    void todo() // method header
    {
        /* body part */
        System.out.println("Do something awesome !!");
    }

    void todo(String task)
    {
        System.out.println("TODO : "+task);
    }

    boolean todo(String task, boolean status)
    {
        if(status)
        {
            System.out.println("COMPLETED : "+task);
        }
        else{
            System.out.println("PENDING : "+task);
        }
        return !status; // return
    }
}
