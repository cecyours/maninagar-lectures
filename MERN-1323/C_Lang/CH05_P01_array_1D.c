
#include<stdio.h>
int main()
{
    int a[100],n,i;
    int neg=0, pos=0, zero=0;

    printf("Enter the size : ");
    scanf("%d",&n);

    printf("Enter the elements : \n");
    
    for(i=0;i<n;i++)
    {
        printf("Enter element for a[%d] = ",i);
        scanf("%d",&a[i]); // init..
    }

    printf("\n-----------------\n\n");

    for (i = 0; i < n; i++)
    {
        printf("a[%d] = %d\n",i,a[i]);

        if(a[i]>0)
        {
            pos++;
        }
        else if(a[i]<0)
        {
            neg++;
        }
        else {
            zero++;
        }
    }
    
    printf(" Neg : %d\n",neg);
    printf(" Pos : %d\n",pos);
    printf("Zero : %d\n",zero);


}