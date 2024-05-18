import java.util.Scanner;
public class CH01_P10_if_else_if_ladder {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter day number : ");
        int day = sc.nextInt();

        if(day==1)
        {
            System.out.println("sunday");
        }
        else if(day==2)
        {
            System.out.println("monday");
        }
        else if(day==3)
        {
            System.out.println("tuesday");
        }
        else if(day==4)
        {
            System.err.println("wednesday");
        }
        else if(day==5)
        {
            System.out.println("thursday");
        }
        else if(day==6)
        {
            System.out.println("friday");
        }
        else if(day==7)
        {
            System.out.println("saturday");
        }
        else{
            System.out.println("in valid number...");
        }
    }
}
