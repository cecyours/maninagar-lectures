import java.net.InetAddress;
import java.util.Scanner;

public class CH17_P01_ip_net {
    public static void main(String[] args) throws Exception {

        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the website to find address : ");
        String s = sc.nextLine();

        InetAddress net = InetAddress.getByName(s);
        System.out.println("Hello Networkd : "+net.getHostAddress());


    }
}
