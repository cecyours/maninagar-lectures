import java.io.*;
import java.util.Scanner;

public class CH16_P03_Copy {

    public static void main(String[] args) throws IOException {
        
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the Source File : ");
        String f = sc.nextLine();

        System.out.print("Enter the Destination File : ");
        String d = sc.nextLine();
        
        FileReader file = new FileReader(f);
        FileWriter outFile = new FileWriter(d);

        int ch;
        while((ch=file.read())!=-1)
        {
            System.out.print(ch);
            outFile.write(ch);
        }

        outFile.close();
        sc.close();
        file.close();
    }
}