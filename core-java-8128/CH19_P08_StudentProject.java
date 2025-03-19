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


class Window extends JFrame {

    JPanel windowPanel;
    JPanel mainPanel;
    JPanel menuPanel;
    JPanel sidePanel;
    JMenuBar menuBar;

    JLabel lblHeading;
    JLabel lblUserName;
    JTextField txtUserName;

    JLabel lblFullName;
    JLabel lblEmail;
    JLabel lblPassword;

    public Window() {
        windowPanel = new JPanel(new BorderLayout());
        menuPanel = new JPanel(new FlowLayout(FlowLayout.LEFT));
        menuPanel.setBackground(new Color(23, 150, 20));
        sidePanel = new JPanel();
        sidePanel.setLayout(new BoxLayout(sidePanel, BoxLayout.Y_AXIS));

        mainPanel = new JPanel(new GridBagLayout()); // ✅ Use GridBagLayout
        GridBagConstraints gbc = new GridBagConstraints();
        gbc.insets = new Insets(10, 10, 10, 10); // spacing between components

        windowPanel.add(menuPanel, BorderLayout.NORTH);
        windowPanel.add(sidePanel, BorderLayout.EAST);
        windowPanel.add(mainPanel, BorderLayout.CENTER);

        /* Init menu bar */
        menuBar = new JMenuBar();
        JMenu fileMenu = new JMenu("File");
        fileMenu.add(new JMenuItem("Create a File"));
        fileMenu.add(new JMenuItem("Save As"));
        fileMenu.add(new JMenuItem("Rename File"));
        menuBar.add(fileMenu);
        menuBar.add(new JMenuItem("Home"));
        menuBar.add(new JMenuItem("About"));
        menuBar.add(new JMenuItem("Setting"));
        menuPanel.add(menuBar);

        /* Form Content */
        lblHeading = new JLabel("Welcome to Register Page");
        lblHeading.setFont(new Font("Arial", Font.BOLD, 16));

        gbc.gridx = 0;
        gbc.gridy = 0;
        gbc.gridwidth = 2;
        gbc.anchor = GridBagConstraints.CENTER;
        mainPanel.add(lblHeading, gbc);

        gbc.gridwidth = 1;
        gbc.anchor = GridBagConstraints.WEST;

        lblUserName = new JLabel("Enter Username:");
        gbc.gridx = 0;
        gbc.gridy = 1;
        mainPanel.add(lblUserName, gbc);

        txtUserName = new JTextField(20); // preferred width (20 columns)
        gbc.gridx = 1;
        gbc.gridy = 1;
        mainPanel.add(txtUserName, gbc);

        getContentPane().add(windowPanel);
    }
}
