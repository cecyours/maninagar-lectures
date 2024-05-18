
public class CH01_P11_nested_if {
    
    public static void main(String[] args) {
        int a = 19;
        int b = 29;
        int c = 221;

        if(a>b)
        {
            if(a>c)
            {
                System.out.println(" a is max "+a);
            }
            else
            {
                System.out.println(" c is max "+c);
            }
        }
        else{
            if(b>c)
            {
                System.out.println(" b is max "+b);
            }
            else{
                System.out.println(" c is max "+c);
            }
        }
    }
}
