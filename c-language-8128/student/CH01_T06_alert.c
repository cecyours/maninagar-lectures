#include<stdio.h>
void main()
{
    int i;

    printf("enter number : ");
    scanf("%d",&i);

    if(i>0)
    {
        printf("entered number is positive");
    }

    else if (i<0)
    {
        printf("entered number is negative\a");
    }
    else
    {
        printf("entered number is zero..");

    }
}