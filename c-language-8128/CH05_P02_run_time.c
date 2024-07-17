#include<stdio.h>
void main()
{
    int a[100],n,i;

    printf("Enter the size : ");
    scanf("%d",&n);

    printf("Enter the data:\n");

    for(i=0;i<n;i++)
    {
        printf("enter value for %d index : ",i);
        scanf("%d",&a[i]);
    }

    printf("\n-----------------\n");
    for(i=0;i<n;i++)
    {
        printf("a[%2d] => %d\n",i,a[i]);
    }
}