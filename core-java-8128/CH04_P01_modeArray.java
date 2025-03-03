public class CH04_P01_modeArray {
    public static void main(String[] args) {
        
        int a[] = {1,2,3,4,5,3,7,2,8,3,2,2,2,2,9,3,0};

        int repeat=0;
        int max_repeat=0;
        int number=a[0];
        for(int i=0;i<a.length;i++)
        {
            int n = a[i];
            repeat = 0;
            for(int j=i+1;j<a.length;j++)
            {
                if(n==a[j])
                {
                    repeat++;
                }
            }
            if(repeat>max_repeat)
            {
                number = n;
                max_repeat = repeat;
            }
        }

        System.out.println(max_repeat);
        System.out.println(number);
    }
}
