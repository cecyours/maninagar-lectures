#include<stdio.h>

int n;
void square(int a[])
{
    int i;

    for(i=0; i<n; i++)
    {
    a[i] = a[i] * a[i];
    printf("a[%2d] = %2d ==> %p\n",i,a[i],&a[i]);
    }
}
void main()
{
    int x[100], i;

    printf("Enter the size:- ");
    scanf("%d",&n);

    printf("Enter the data:- \n");
    for(i=0;i<n;i++)
    {
        printf("Enter x[%d]:- ",i);
        scanf("%d",&x[i]);
    }
    square(x);

    printf("----------------------------\n");
    for(i=0;i<n;i++)
    {
         printf("x[%2d] = %2d ==> %p\n",i,x[i],&x[i]);
    }

    
}