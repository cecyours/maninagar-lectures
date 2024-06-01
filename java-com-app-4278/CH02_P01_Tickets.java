public class CH02_P01_Tickets {
    
    int price = 199;


    int getPrice()
    {
        return price-10;
    }
    public static void main(String[] args) {
        
        CH02_P01_Tickets t = new CH02_P01_Tickets();

        int  x = t.getPrice();

        System.out.println("The price : "+x);
    }
}
