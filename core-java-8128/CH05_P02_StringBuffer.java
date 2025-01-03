public class CH05_P02_StringBuffer {
    public static void main(String[] args) {
        
        StringBuffer s = new StringBuffer(2);

        s.append("52191");
       
        System.out.println(""+s);
        System.out.println(""+s.capacity());
        
    }
}
