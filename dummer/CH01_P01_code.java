import java.util.Scanner;

class  Student{
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        int n;

        System.out.print("Enter a number : ");
        n = sc.nextInt();

        if(n<0)
            n = n*-1;


        System.out.println("your number : "+n);  
    }
}