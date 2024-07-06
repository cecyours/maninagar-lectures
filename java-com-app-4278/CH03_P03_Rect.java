public class CH03_P03_Rect {
    public static void main(String[] args) {
        Rect x = new Rect();
        Rect y = new Rect(20,2);
        x.cal_area();
        y.cal_area();
        x.show();
        y.show();
    }
    
}
class Rect
{
    private int l,w,area;
    public Rect()
    {
        l=10;
        w=5;
    }
    public Rect(int a, int b)
    {
        l=a;
        w=b;
    }
    public void cal_area()
    {
        area = l*w;
    }

    public void show()
    {
        System.out.println("Area = "+area);
    }
}
