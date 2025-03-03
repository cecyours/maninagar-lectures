
public class CH01_P03_Inheritance {
    public static void main(String[] args) {

        SeniorSchool monitor = new SeniorSchool();
        monitor.name = "master";
        monitor.age = 39;
        monitor.rollNo = 199;

        monitor.studying();
        monitor.displayInfo();
    }
}

class Student {

    String name;
    int rollNo, age;

    void eating() {
        System.out.println(name + " is eating.");
    }

    void studying() {
        System.out.println(name + " is studying.");
    }

    void displayInfo() {
        System.out.println("name : " + name);
        System.out.println("age : " + age);
        System.out.println("rollNo : " + rollNo);
    }
}

class SeniorSchool extends Student {

    // nothing
}
