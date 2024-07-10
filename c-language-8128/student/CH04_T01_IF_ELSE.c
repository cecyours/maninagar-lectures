#include<stdio.h>
void main()
{
    int a,b;

    printf("enter the number : ");
    scanf("%d,%d",&a,&b);

    if(a>b)
    {
        printf("%d is greater..",a);
    }

    else
    {
        printf("%d is greater..",b);
    }
}