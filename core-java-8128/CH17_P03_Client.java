import java.io.BufferedReader;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.InputStreamReader;
import java.net.Socket;

public class CH17_P03_Client {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        DataInputStream serverDin;
        DataOutputStream serverDout;

        System.out.println("Connecting...");
        Socket server = new Socket("127.0.0.1", 3001);
        System.out.println("Connected !!!");

        serverDin = new DataInputStream(server.getInputStream());
        serverDout = new DataOutputStream(server.getOutputStream());
        String rcvd="";

        serverDout.writeUTF("I am Here");
        String msg = "";
        while((!msg.equalsIgnoreCase("exit")))
        {   
            
            rcvd = serverDin.readUTF();
            System.out.println("SERVER : "+rcvd);

            
            System.out.print("CLIENT : ");
            msg = br.readLine();
            serverDout.writeUTF(msg);
        }
        server.close();
    }
}
