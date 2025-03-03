public class CH02_P02_AddSum {

    int sum = 200;

    void addSum() {
        sum = sum + 10 - sum;
        System.out.println("the new value : " + sum);
    }

    public static void main(String[] args) {

        CH02_P02_AddSum s = new CH02_P02_AddSum();

        s.addSum();
    }
}
