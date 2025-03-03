import java.util.Scanner;

public class CH02_P05_automorphic {
    
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the number : ");
        int n = sc.nextInt();

        int sq = n*n;
        int rem_n;
        int rem_sq;
        boolean f = true;
        int temp_number = n;

        while(n>0)
        {   
            rem_n = n%10;
            rem_sq = sq%10;

            System.out.println(n+","+rem_n+"\t"+sq+", "+rem_sq);

            if(rem_n!=rem_sq)
            {
                f = false;
                break;
            }

            n = n / 10;
            sq = sq / 10;
        }


        if(f)
        {
            System.out.println(temp_number+" the number is automorphic.");
        }
        else{
            System.out.println(temp_number+" the number is not automorphic.");
        }
    }
}



// n : 76
// sq : 5776