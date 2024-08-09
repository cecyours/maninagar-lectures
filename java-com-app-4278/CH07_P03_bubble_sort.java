public class CH07_P03_bubble_sort {
    public static void main(String[] args) {
        
        int data[] = {1,23,4,5,6,78,9,98,76,5,4,3};
        int len = data.length;
        int i,j;
        
        
        for(i=0;i<len-1;i++)
        {
            for(j=0;j<len-i-1;j++)
            {
                if(data[j]>data[j+1])
                {
                    int temp = data[j];
                    data[j] = data[j+1];
                    data[j+1] = temp;
                }
            }
        }

        System.err.println("----------------");
        for(i=0;i<len;i++)
        {
            System.out.println(data[i]);
        }
    }
}
