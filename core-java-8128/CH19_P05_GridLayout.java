import javax.swing.*;
import java.awt.*;

public class CH19_P05_GridLayout {

    public static void main(String[] args) {

        Window w = new Window(args);

        w.setSize(500, 350);
        w.setVisible(true);
        w.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}

class Window extends JFrame{

    
    JPanel panel;
    GridLayout layout;
    public Window(String names[])
    {
        panel = new JPanel();
        layout = new GridLayout(names.length/2,2);
        panel.setLayout(layout);
        for (String s : names) {
            JButton btn = new JButton(s);
            panel.add(btn);
        }
        panel.add(new JLabel("Kites"),4,3);
        this.getContentPane().add(panel);
    }

}