#include<stdio.h>
void main()
{
    int a[100];
    int n,i;


    printf("Enter the number of elements : ");
    scanf("%d",&n);


    // 
    printf("Enter the data : \n");
    for(i=0;i<n;i++)
    {
        printf("Enter element for  a[%d] : ",i);
        scanf("%d",&a[i]);
    }

    printf("\n-----------------\n");

    for(i=0;i<n;i++)
    {
        printf("a[%d] = %d => %d \n",i,a[i],a[i]*a[i]);
    }
}