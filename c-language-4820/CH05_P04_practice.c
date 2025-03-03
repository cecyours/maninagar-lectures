#include<stdio.h>
void main()
{
    int a[100],n,i;

    printf("Enter the number: ");
    scanf("%d",&n);

    printf("enter the data : \n");

    for(i=0;i<10;i++)
    {
        printf("Enter a[%d] = ",i);
        scanf("%d",&a[i]);
    }

    printf("----------------------\n");

    for(i=0;i<10;i++)
    {
        printf("a[%d] = %d\n",i,a[i]);
    }
}