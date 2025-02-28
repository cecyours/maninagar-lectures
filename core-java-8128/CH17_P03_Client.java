import java.io.DataInputStream;
import java.net.Socket;

public class CH17_P03_Client {
    public static void main(String[] args) throws Exception {

        DataInputStream serverDin;

        System.out.println("Connecting...");
        Socket server = new Socket("127.0.0.1", 3001);
        System.out.println("Connected !!!");

        serverDin = new DataInputStream(server.getInputStream());

        // read
        String data = serverDin.readUTF();
        System.out.println("Server says : " + data);
        // while loop
        server.close();
    }
}
