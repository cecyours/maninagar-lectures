public class CH02_P03_info {

    String name;
    int age;

    public CH02_P03_info(String inputName) {
        name = inputName;
    }

    void setAge(int inputAge)
    {
        age = inputAge;
    }


    void displaData ()
    {
        System.out.println("your name is : "+name);
        System.out.println("your age is "+age);
    }

    public static void main(String[] args) {

        CH02_P03_info p = new CH02_P03_info("Vishal");

        p.setAge(20);

        p.displaData();
    }
}
