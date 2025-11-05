import java.util.Scanner;

public class P17_Grades {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        System.out.print("% enter marks ");
        int marks = sc.nextInt();

        if(marks >= 90 && marks <= 100) {
            System.out.print("grade A");
        }else if(marks >= 80 && marks < 90) {
            System.out.print("grade B");
        }else if(marks >= 60 && marks < 80) {
            System.out.print("grade C");
        }else if(marks >= 40 && marks < 60) {
            System.out.print("grade D");                     
        }else {
            System.out.print("fail..");
        }
        
    }
}