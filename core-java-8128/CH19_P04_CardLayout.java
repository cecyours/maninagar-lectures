import java.awt.*;
import java.awt.event.*;
import javax.swing.JFrame;
import javax.swing.*;

public class CH19_P04_CardLayout {

    public static void main(String[] args) {

        MyWindow m = new MyWindow(args);
        m.setSize(500, 350);
        m.setVisible(true);
        m.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}

class MyWindow extends JFrame implements ActionListener {

    JButton btnList[];
    CardLayout card;
    Container c;
    public MyWindow() {

    }

    public MyWindow(String names[]) {

        btnList = new JButton[names.length];
        card = new CardLayout(40, 30);
        c = getContentPane();
        c.setLayout(card);    
        int i = 0;
        for (String n : names) {
            btnList[i] = new JButton(n);
            btnList[i].addActionListener(this);
            c.add(btnList[i], n);
            i++;
        }
        c.setLayout(card);
      
    }

    public void actionPerformed(ActionEvent e) {
        card.next(c);
        System.out.println("Hello Coder !!");
    }
}