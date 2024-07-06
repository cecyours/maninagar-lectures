public class CH03_T03_box {
    public static void main(String[] args) {
        Box b = new Box(15);
        System.out.println("new height:"+b.getheight());
        b.setheight(20);
        System.out.println("new height:"+b.getheight());
    }
}
class Box{
    double height = 10;
    double width = 5;
    double depth = 10;
    public Box(double height,double width,double depth)
    {
        this.height = height;
        this.width = width;
        this.depth = depth;
    }
    void setheight(double height)
    {
        this.height = height;
       
    }

    void setwidth(double width)
    {
        this.width = width;
    }
    void setdepth(double depth)
    {
        this.depth = depth;
    } 

    double getheight()
    {
        return height;
    }
    double getwidth()
    {
        return width;
    }
    double getdepth()
    {
        return depth;
    }
}