package ch08_protected;

import ch08_protected.CH08_P03_Protected_Pkg;

public class CH08_P03_ProtectedImplement {
    public static void main(String[] args) {
        
        Task t = new Task();
        t.perform();
        
    }
}

class Task extends CH08_P03_Protected_Pkg{

    void perform()
    {
        super.demo();
    }
}