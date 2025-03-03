#include<stdio.h>
void main()
{
    int a[100],i,n;

    printf("Enter the number of elements : ");
    scanf("%d",&n);

    printf("Enter the data : \n");
    
    for(i=0;i<n;i++)
    {
        printf("Enter a[%d] = ",i);
        scanf("%d",&a[i]);
    }

    printf("\n0000000000000\n");

    for(i=2;i<n;i++)
    {
        printf(" a[%d] = %d\n",i,a[i]);
    }
}