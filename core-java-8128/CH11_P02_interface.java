public class CH11_P02_interface {
    public static void main(String[] args) {
        
        Task12 task = new Task12();
        task.show();
    }
}

interface MyWork{
    public void show();
}

interface yourWork{
    public void show();
    public boolean isVerified();
}
class Task12 implements MyWork, yourWork{

    public void show()
    {
        System.out.println("I am Show");
    }
    public boolean isVerified()
    {
        return false;
    }
}
