import java.awt.Color;

import javax.swing.*;
import javax.swing.JFrame;
import javax.swing.JLabel;

public class CH19_P01_Jframe {
    public static void main(String[] args) {

        JFrame win = new JFrame("Mari Screen");
        win.setSize(1000, 400);

        JLabel label = new JLabel("Gk Master");
        label.setBounds(0, 100, 100, 20);
        label.setForeground(Color.PINK);
        win.add(label);

        JTextField txtUsername = new JTextField();
        txtUsername.setBounds(100,100,200,40);
        win.add(txtUsername);

        JButton btn = new JButton("Click Me");
        btn.setBounds(110, 200, 200, 30);
        win.add(btn);
        win.setLayout(null);
        win.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        win.setVisible(true);

    }
}
