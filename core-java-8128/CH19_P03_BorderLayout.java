import java.awt.BorderLayout;

import javax.swing.JButton;
import javax.swing.JFrame;

public class CH19_P03_BorderLayout {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Flow Layout");

        BorderLayout layout = new BorderLayout();
        frame.setLayout(layout);
        frame.setSize(500, 350);
 
        frame.add(new JButton("CENTER"), BorderLayout.CENTER);
        frame.add(new JButton("NORTH"), BorderLayout.NORTH);
        frame.add(new JButton("EAST"), BorderLayout.EAST);
        frame.add(new JButton("WEST"), BorderLayout.WEST);
        frame.add(new JButton("SOUTH"), BorderLayout.SOUTH);

 
        frame.setVisible(true);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}
