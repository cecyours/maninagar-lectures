import java.util.Scanner;

public class P08_AreaofTriangle{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter A : ");
        double a = sc.nextDouble();

        System.out.print("Enter B : ");
        double b = sc.nextDouble();

        System.out.print("Enter C : ");
        double c = sc.nextDouble();

        double S = a + b + c / 2.0;
        System.out.print("S = " + S);

        double area = Math.sqrt(S * ( S-a ) * ( S-b ) * ( S-c ));
        System.out.print("Area =" + area);
    }
}