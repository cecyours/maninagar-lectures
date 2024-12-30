public class CH05_P01_StringMethods {
    public static void main(String[] args) {
        
        String s = "Hea lo World";

        System.out.println("Chart at : "+s.charAt(2));
        System.out.println("codePointAt : "+s.codePointAt(2));
        System.out.println("codePointBefore : "+s.codePointBefore(2));
        System.out.println("codePointBefore: "+s.codePointBefore(2));
        System.out.println("codePointCount: "+s.codePointCount(1,4));

        String s1  = "abce";
        String s2  = "abce";
        StringBuffer s3 = new StringBuffer("abce");
        System.out.println("compareTo : "+s1.compareTo(s2));
        System.out.println("compareToIgnoreCase : "+s1.compareToIgnoreCase(s2));
        // System.out.println("compareToIgnoreCase : "+s1.compareToIgnoreCase(s3));

        System.out.println("concat : "+s1.concat(s2));
        System.out.println("s1 : "+s1);

        System.out.println("contains : "+s1.contains("e"));
        
        System.out.println("contentEquals : "+s1.contentEquals(s3));

        String name = "Gk";
        int rollno = 39;
        
        String k = String.format("Hello %s, your %d is rollno",name,rollno);
        System.out.println(""+k);

        byte sb[] = s1.getBytes();

        System.out.println("getBytes : "+sb);
        for (byte b : sb) {
            System.out.print(" | "+b);
        }
        System.out.println();

        char cb[] =  {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9'};

        s1 = "ktieskjhh";
        s1.getChars(2,5,cb,3);

        System.out.println(cb);


    }   
}
