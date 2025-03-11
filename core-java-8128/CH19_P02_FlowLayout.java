import javax.swing.JButton;
import javax.swing.JFrame;
import java.awt.*; 

public class CH19_P02_FlowLayout {
 
    public static void main(String[] args) {
        
        JFrame frame = new JFrame("Flow Layout");

        String names[] = {"Apple","Banana","Cherry","Orange","Lemon"};


        for (String btnTxt : names) {

            JButton btn = new JButton(btnTxt);
            frame.add(btn);
        }
        
        FlowLayout layout = new FlowLayout(FlowLayout.RIGHT); 
        frame.setLayout(layout);
        frame.setSize(500, 350);
        frame.setVisible(true);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

    }
}
