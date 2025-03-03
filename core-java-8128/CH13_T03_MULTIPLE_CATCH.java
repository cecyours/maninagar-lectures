public class CH13_T03_MULTIPLE_CATCH {
    public static void main(String[] args) {
        Activity a = new Activity();

        a.div(7, 5);


    }
}

class Activity{
    int a[] = {1,2,3,4,5,6,7,8,9};

    public void div(int i, int b)
    {
        try{
            System.out.println("The Division : "+(double)(a[i]/b));
        }
        catch(ArithmeticException e)
        {
            System.out.println("Arithmetic Exception : "+e.getMessage());
        }
        catch(ArrayIndexOutOfBoundsException e)
        {
            System.out.println("ArrayIndexOutOfBoundsException Exception : "+e.getMessage());
        }
        catch(Exception e){
            System.out.println("Exception : "+e.getMessage());
        }

    }
}