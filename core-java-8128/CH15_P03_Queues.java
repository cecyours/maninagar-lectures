import java.util.*;

public class CH15_P03_Queues {
    public static void main(String[] args) {

        Queue<String> queue = new LinkedList<>();

        queue.add("apple");
        queue.add("banana");
        queue.add("cherry");

        System.out.println("Queue : " + queue);

        queue.offer("mango");
        System.out.println("Queue : " + queue);

        queue.add("Kites");
        System.out.println("Queue : " + queue);

       String s =  queue.element();
       System.out.println("Queue : " + queue+" | "+s);

        s =  queue.peek();
       System.out.println("Queue : " + queue+" | "+s);


        s =  queue.poll();
       System.out.println("Queue : " + queue+" | "+s);
    }
}
