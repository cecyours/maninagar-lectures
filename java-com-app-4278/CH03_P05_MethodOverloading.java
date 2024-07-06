public class CH03_P05_MethodOverloading {
    public static void main(String[] args) {
        
        Task t = new Task();


        System.out.println("The sum "+t.sum(2, 2, 8));

        System.out.println("The sum "+t.sum(3.3,4.2));
    }
}

class Task{

   
    int sum(int a,int b,int c) //m1
    {
        return a+b+c;
    }

    int sum(int a,int b) //m2
    {
        return a+b;
    }

    double sum(double x,double y) //m3
    { 
        return x+y;
    }
}
