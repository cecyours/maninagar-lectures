import java.io.*;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

public class CH16_P04_Zip {
    public static void main(String[] files) throws IOException {

        FileOutputStream file = new FileOutputStream("work.zip");

        ZipOutputStream zos = new ZipOutputStream(file);

        for (String s : files) {
            File fileToZip = new File(s);
            FileInputStream f = new FileInputStream(fileToZip);
            ZipEntry zipEntry = new ZipEntry(fileToZip.getName());
            zos.putNextEntry(zipEntry);

            byte[] bytes = new byte[1024];
            int length;
    
            while (((length = f.read(bytes)) >= 0)) {
                zos.write(bytes, 0, length);
            }
            f.close();
        }

      

        zos.close();
        file.close();
    }
}
