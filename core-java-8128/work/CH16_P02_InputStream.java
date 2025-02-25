import java.io.*;
import java.util.Scanner;

public class CH16_P02_InputStream {

    public static void main(String[] args) throws IOException {
        
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the File : ");
        String f = sc.nextLine();

        FileInputStream file = new FileInputStream(f);


        int ch;
        while((ch=file.read())!=-1)
        {
            System.out.print((char)ch);
        }

        sc.close();
        file.close();
    }
}