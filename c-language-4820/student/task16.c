#include<stdio.h>
void main()
{
    int a[100];
    int n, i;
    int *ptr = a;

    printf("Enter the size: ");
    scanf("%d", &n);

    printf("Enter the data: \n");
    for(i=0;i<n;i++)
    {
        printf("Enter a[%d] = ",i);
        scanf("%d",ptr + i);
    }

    printf("------------------------\n");

    for(i=0;i<n;i++)
    {
        printf("a[%d] = %d at %u\n",i,a[i],&a[i]);
    }
}