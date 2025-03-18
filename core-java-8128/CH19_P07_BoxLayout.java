import javax.swing.*;
import javax.swing.border.EmptyBorder;
import java.awt.Insets; 

public class CH19_P07_BoxLayout {
    public static void main(String[] args) {
        Window w = new Window(args);

        w.setSize(500, 350);
        w.setVisible(true);
        w.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}


class Window extends JFrame{

    JPanel panel;

    public Window (String names[])
    {
        panel = new JPanel();
        BoxLayout boxLayout = new BoxLayout(panel, BoxLayout.X_AXIS);
        panel.setBorder(new EmptyBorder(new Insets(10, 50, 100, 150))); 
        panel.setLayout(boxLayout);
  

        for (String n : names) {
            
            JButton btn = new JButton(n);
            panel.add(btn);
        }

        getContentPane().add(panel);

    }
}