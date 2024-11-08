import javax.swing.ButtonGroup;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JRadioButton;
import javax.swing.SwingUtilities;

public class App {
    public static void main(String args[]){
        SwingUtilities.invokeLater(new Runnable(){
            public void run(){
                new Home();
            }
        });
    }
}
class Home {
    Home(){
        JFrame frame = new JFrame("Database Management");
        frame.setSize(1024, 1024);
        frame.setVisible(true);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLayout(null);

        JRadioButton event = new JRadioButton("Event");
        JRadioButton organizer = new JRadioButton("Organizer");
        JRadioButton attendee = new JRadioButton("Attendee");
        JRadioButton ticket = new JRadioButton("Ticket");
        JRadioButton venue = new JRadioButton("Venue");

        event.setBounds(50, 50, 100, 30);
        organizer.setBounds(150, 50, 100, 30);
        attendee.setBounds(250, 50, 100, 30);
        ticket.setBounds(350, 50, 100, 30);
        venue.setBounds(450, 50, 100, 30);


        ButtonGroup groupTableNamesRadioBtn = new ButtonGroup();
        groupTableNamesRadioBtn.add(event);
        groupTableNamesRadioBtn.add(organizer);
        groupTableNamesRadioBtn.add(attendee);
        groupTableNamesRadioBtn.add(ticket);
        groupTableNamesRadioBtn.add(venue);

        frame.add(event);
        frame.add(organizer);
        frame.add(attendee);
        frame.add(ticket);
        frame.add(venue);

        JButton selectRadio = new JButton("SELECT TABLE");
        selectRadio.setBounds(550, 50, 130, 30);
        frame.add(selectRadio);
    }
}
