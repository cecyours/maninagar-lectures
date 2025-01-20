public class CH07_P04_Static {

    static{
        // static block
        System.out.println("Static block");
    }
    public static void main(String[] args) {

        System.out.println("Hello World");
        Task t1 = new Task();
        Task t2 = new Task();
        System.out.println("t1: "+t1.count);
        Task t3 = new Task();
     

        System.out.println("t2: "+t2.count);
        System.out.println("t3: "+t3.count);

        System.out.println("Total count: "+Task.count);

        t1.display();
        Task.display();
    }
}

class Task{

   static int count=0;

    public Task(){
        count++; 
    }

   static void display(){
        System.out.println("Count: "+count);
    }
}


