import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class CH19_P08_StudentProject {

    public static void main(String[] args) {

        Window w = new Window();
        w.setSize(500, 350);
        w.setVisible(true);
        w.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}

class Window extends JFrame implements ActionListener {

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
    JPasswordField psdPassword;

    JLabel lblGender;
    JRadioButton rbMale, rbFemale, rbOther;

    JLabel lblHobbies;
    JCheckBox cbCoding, cbDebugin, cbReading;

    JLabel lblSubjects;
    // JList<String> lstSubjects;
    JComboBox<String> lstSubjects;

    JButton btnSubmit;

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
        mainPanel.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));

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

        lblPassword = new JLabel("Enter Password:");
        gbc.gridx = 0;
        gbc.gridy = 2;
        mainPanel.add(lblPassword, gbc);

        psdPassword = new JPasswordField(20); // preferred width (20 columns)
        gbc.gridx = 1;
        gbc.gridy = 2;
        mainPanel.add(psdPassword, gbc);

        lblGender = new JLabel("Choose Gender:");
        gbc.gridx = 0;
        gbc.gridy = 3;
        mainPanel.add(lblGender, gbc);

        ButtonGroup bg = new ButtonGroup();

        rbMale = new JRadioButton("Male");
        rbFemale = new JRadioButton("Fe Male");
        rbOther = new JRadioButton("Other");
        bg.add(rbMale);
        bg.add(rbFemale);
        bg.add(rbOther);

        JPanel pGender = new JPanel();
        BoxLayout genderLayout = new BoxLayout(pGender, BoxLayout.X_AXIS);
        pGender.setLayout(genderLayout);

        pGender.add(rbMale);
        pGender.add(rbFemale);
        pGender.add(rbOther);

        gbc.gridx = 1;
        gbc.gridy = 3;
        mainPanel.add(pGender, gbc);

        lblHobbies = new JLabel("select Hobbies:");
        gbc.gridx = 0;
        gbc.gridy = 4;
        mainPanel.add(lblHobbies, gbc);

        cbCoding = new JCheckBox("Coding");
        cbDebugin = new JCheckBox("Debuging");
        cbReading = new JCheckBox("Reading");

        JPanel pHobbies = new JPanel();
        BoxLayout lHobbies = new BoxLayout(pHobbies, BoxLayout.X_AXIS);
        pHobbies.setLayout(lHobbies);

        pHobbies.add(cbCoding);
        pHobbies.add(cbDebugin);
        pHobbies.add(cbReading);

        gbc.gridx = 1;
        gbc.gridy = 4;
        mainPanel.add(pHobbies, gbc);

        lblSubjects = new JLabel("Select Subjects:");
        gbc.gridx = 0;
        gbc.gridy = 5;
        mainPanel.add(lblSubjects, gbc);

        String s[] = { "Python", "Java", "IOT" };
        lstSubjects = new JComboBox<>(s);
        gbc.gridx = 1;
        gbc.gridy = 5;
        mainPanel.add(lstSubjects, gbc);

        gbc.gridwidth = 2;
        btnSubmit = new JButton("Submit");
        gbc.gridx = 0;
        gbc.gridy = 6;
        gbc.fill = 2;
        mainPanel.add(btnSubmit, gbc);

        btnSubmit.addActionListener(this);
        getContentPane().add(windowPanel);
    }

    @Override
    public void actionPerformed(ActionEvent e) {

        System.out.println("Hello World");

        System.out.println("User name : " + txtUserName.getText());
        System.out.println(" Password : " + psdPassword.getText());

        String selectedGender = "";

        if (rbMale.isSelected()) {
            selectedGender = rbMale.getText();
        } else if (rbFemale.isSelected()) {
            selectedGender = rbFemale.getText();
        } else {
            selectedGender = rbOther.getText();
        }

        System.out.println("gender : " + selectedGender);

    }
}
