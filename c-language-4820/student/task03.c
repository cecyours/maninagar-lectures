#include<stdio.h>
void main()
{
    int a[100],n,i,even;

    printf("Enter the size: ");
    scanf("%d",&n);

    printf("enter the data: \n");

    for(i=0;i<n;i++)
    {
        printf("enter the data a[%d]:-", i);
        scanf("%d",&a[i]);
    }
    for(i=0;i<n;i++)
    {
        if(a[i] % 2 == 0)
        {
            printf("--------------------------\n");
            printf("number is even %d\n",a[i]);
        }
    }
    printf("--------------------------\n");
    for(i=0;i<n;i++)
    {
        printf("a[%d] = %d\n",i,a[i]);
    }
}