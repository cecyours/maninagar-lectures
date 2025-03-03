import java.io.*;
import java.util.Scanner;

public class CH16_P01_FileOutputStream {
    public static void main(String[] args) throws FileNotFoundException, IOException {

        String fileName = "CH16_P01_Sample.txt";

        Scanner sc = new Scanner(System.in);
        FileOutputStream file = new FileOutputStream(fileName, true);

        System.out.print("Enter the File Name : ");
        String data = sc.nextLine();

        for (int i = 0; i < data.length(); i++) {
            file.write(data.charAt(i));
        }
        file.write('\n');

        sc.close();
        file.close();
    }
}
