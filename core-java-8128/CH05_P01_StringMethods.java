public class CH05_P01_StringMethods {
    public static void main(String[] args) {

        String s = "Hea lo World";

        System.out.println("Chart at : " + s.charAt(2));
        System.out.println("codePointAt : " + s.codePointAt(2));
        System.out.println("codePointBefore : " + s.codePointBefore(2));
        System.out.println("codePointBefore: " + s.codePointBefore(2));
        System.out.println("codePointCount: " + s.codePointCount(1, 4));

        String s1 = "abce";
        String s2 = "abce";
        StringBuffer s3 = new StringBuffer("abce");
        System.out.println("compareTo : " + s1.compareTo(s2));
        System.out.println("compareToIgnoreCase : " + s1.compareToIgnoreCase(s2));
        // System.out.println("compareToIgnoreCase : "+s1.compareToIgnoreCase(s3));

        System.out.println("concat : " + s1.concat(s2));
        System.out.println("s1 : " + s1);

        System.out.println("contains : " + s1.contains("e"));

        System.out.println("contentEquals : " + s1.contentEquals(s3));

        String name = "Gk";
        int rollno = 39;

        String k = String.format("Hello %s, your %d is rollno", name, rollno);
        System.out.println("" + k);

        byte sb[] = s1.getBytes();

        System.out.println("getBytes : " + sb);
        for (byte b : sb) {
            System.out.print(" | " + b);
        }
        System.out.println();

        char cb[] = { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' };

        s1 = "ktieskjhh";
        s1.getChars(2, 5, cb, 3);

        System.out.println(cb);

        System.out.println("hashCode : " + s1.hashCode());

        s1 = "Hello peter, how peter rare you peter";
        System.out.println(" indexOf : " + s1.indexOf("peter"));
        System.out.println(" middle : " + s1.indexOf("peter", s1.indexOf("peter") + 1));
        System.out.println(" lastIndexOf : " + s1.lastIndexOf("peter"));

        s1 = new String("Hello World");
        s2 = new String("Hello World");

        System.out.println(" compare : " + (s1.intern() == s2.intern()));

        String names[] = { "Iron man", "Master", "thor", "What if" };

        String line = String.join(", ", names);
        System.out.println(" list : " + line);

        String search = ".*man.*"; // Regular expression to check if "man" exists as a substring
        String data = "i am man worker";
        System.out.println(data.matches(search)); // Outputs: true

        s1 = "012345678";
        int i = s1.offsetByCodePoints(1, 3);
        System.out.println(" offsetByCodePoints :" + s1.charAt(i));

        String arr[] = line.split(",");

        for (String string : arr) {
            System.out.println(string.trim());
        }

        s1 = "Hello peter, how peter rare you peter";

        System.out.println("replace : " + s1.replace("peter", "Start"));

        String myStr = "Quest complete! Earned 30 gold and 500 experience.";
        String regex = "[0-9]+";

        System.out.println("" + myStr.replaceAll(regex, "\\$$0.00"));

        s1 = "Hello World 123";

        System.out.println("substring : " + s1.substring(4));
        System.out.println("subSequence : " + s1.subSequence(4,7));

        s1 ="gk master";

        char letters[] = s1.toCharArray();

        System.out.print("{ ");
        for (char c : letters) {
            
            System.out.print("'"+c+"', ");
        }

        System.out.println("}");

         Integer n = 29;

         String myRoleNo = n+""; // n.toString()

         String newN = String.valueOf(n);

         System.out.println(" Hello "+n+", "+myRoleNo +" => "+newN);
    }
}
