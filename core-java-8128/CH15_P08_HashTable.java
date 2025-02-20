import java.util.Hashtable;
import java.util.Map;

public class CH15_P08_HashTable {
    public static void main(String[] args) {
        
        Hashtable<String,Double> t = new Hashtable<>();

        t.put("Moahn", 20.0);
        t.put("Ria",20.3);
        t.put("Shneha",201.3);


        for(Map.Entry<String,Double> e: t.entrySet()){

            System.out.println("Keys : "+e.getKey()+" \t "+e.getValue());
            
        }
    }
}
