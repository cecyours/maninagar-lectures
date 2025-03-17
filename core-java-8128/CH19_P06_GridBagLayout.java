import javax.swing.*;
import java.awt.*;

public class CH19_P06_GridBagLayout {
    public static void main(String[] args) {

        Window w = new Window();

        w.setSize(500, 350);
        // w.manual();
        w.auto(args);
        w.setVisible(true);
        w.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}

class Window extends JFrame {
    JPanel panel;
    GridBagConstraints gbc;

    public Window() {

        panel = new JPanel(new GridBagLayout());
        gbc = new GridBagConstraints();
        getContentPane().add(panel);

    }

    void manual() {

        gbc.ipadx = 15;
        gbc.ipady = 15;

        gbc.insets = new Insets(2, 2, 2, 2);

        gbc.gridx = 0;
        gbc.gridy = 0;

        panel.add(new JButton("Apple"), gbc);

        gbc.gridx = 1;
        gbc.gridy = 0;
        panel.add(new JButton("Apple"), gbc);

        gbc.gridx = 0;
        gbc.gridy = 1;
        panel.add(new JButton("Apple"), gbc);
    }

    void auto(String names[]) {
        

        gbc.ipadx = 15;
        gbc.ipady = 15;

        gbc.insets = new Insets(2, 2, 2, 2);

        int row = 0;
        int col = 0;
        for (String s : names) {
            
            JButton btn = new JButton(s);
            gbc.gridx = col%2;
            gbc.gridy = row;
            panel.add(btn,gbc);

            col++;

            if(col%2==0)
            {
                row ++;
            }

        }

    }

}
