import java.util.Calendar;

public class CH15_P09_Calendar {
    public static void main(String[] args) {

        Calendar c = Calendar.getInstance();

        System.out.println("Year : " + c.get(Calendar.YEAR));
        c.add(Calendar.YEAR, 5);
        System.out.println("Next 5 Year "+c.get(Calendar.YEAR));
    }
}
