import javax.swing.*;
import java.awt.*;
public class CH19_P08_StudentProject {
 
    public static void main(String[] args) {

        Window w = new Window();
        w.setSize(500, 350);
        w.setVisible(true);
        w.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}


class Window extends JFrame{

    JPanel windowPanel; // border layout
    JPanel mainPanel; // border layout
    JPanel menuPanel;
    JPanel sidePanel;

    public Window()
    {
        windowPanel = new JPanel(new BorderLayout());
        menuPanel = new JPanel(new FlowLayout());

        menuPanel.setBackground(Color.RED);
        sidePanel = new JPanel();
        BoxLayout box = new BoxLayout(sidePanel,BoxLayout.Y_AXIS);
        sidePanel.setLayout(box);


        mainPanel = new JPanel();

        windowPanel.add(menuPanel,BorderLayout.NORTH);
        windowPanel.add(sidePanel,BorderLayout.EAST);
        windowPanel.add(mainPanel,BorderLayout.CENTER);




        // add button in menu

        JButton btn = new JButton("Home");
        menuPanel.add(btn);


        getContentPane().add(windowPanel);
    }

}