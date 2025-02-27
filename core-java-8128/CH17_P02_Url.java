import java.net.URL;

public class CH17_P02_Url {
    public static void main(String[] args) throws Exception {

        URL l = new URL("https://accountshunt.com:2083/cpsess8114955355/frontend/jupiter/lveversion/nodejs-selector.html.tt#/");

        System.out.println("Query : " + l.getQuery());
        System.out.println(" Port : " + l.getPort());

    }
}
