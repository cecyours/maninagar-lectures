public class CH18_P01_Threads {

    public static void main(String[] args) {
        int n = 10;
        Task t[] = new Task[n];
        for (int i = 0; i <n; i++) {
            Task tx = new Task();
            tx.setName("Task-" + i);
            tx.setPriority(i+ 1);
            t[i] = tx;
        }

        System.out.println("hello World");
        for (int i = 0; i < n; i++) {
            t[i].start();
        }

    }
}

class Task extends Thread {
    public void run() {
        try {
            Thread.sleep(100);

            System.out.println("Executing " + Thread.currentThread().getName() +
                    " with Priority: " + Thread.currentThread().getPriority());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
