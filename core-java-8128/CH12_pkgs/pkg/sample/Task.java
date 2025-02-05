package CH12_pkgs.pkg.sample;

public class Task {

    String taskName;

    public Task()
    {
        taskName = "Kuch nahi kr rha hu";
    }

    public Task(String taskName) {
        this.taskName = taskName;
    }

    public void toDo()
    {
        System.out.println("I am Doing  : "+taskName);
    }
}
