import java.util.Date;

public class CH15_P10_Date {
    public static void main(String[] args) {

        Date d = new Date();

        System.out.println(" Current Date " + d);
        System.out.println(" Current Date " + d.getTime());

        Date d1 = new Date(1822227021102l);

        System.out.println("Deprecated : " + d1);
        d1.setTime(1822227081102l);
        System.out.println("check kites : " + d1);
    }

}
