import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.ServerSocket;
import java.net.Socket;

public class CH17_P03_Server {

    public static void main(String[] args) throws Exception, IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        DataInputStream clientDin;
        DataOutputStream clientDout;
        int port = 3000;
        ServerSocket ss = new ServerSocket(port);
        System.out.println("Waiting for connection..");
        Socket s = ss.accept();
        System.out.println("I am connected !!");

        clientDin = new DataInputStream(s.getInputStream());
        clientDout = new DataOutputStream(s.getOutputStream());

        String rcvd="";
        while((!rcvd.equalsIgnoreCase("exit")))
        {   
            
            rcvd = clientDin.readUTF();
            System.out.println("CLIENT : "+rcvd);


            System.out.print("SERVER : ");
            String msg = br.readLine();
            clientDout.writeUTF(msg);
        }
        ss.close();
        s.close();
    }
}