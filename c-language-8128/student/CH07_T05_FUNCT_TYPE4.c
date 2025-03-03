#include<stdio.h>
int sub(int a,int b)
{
    return a-b;
}


void main()
{
    int a,b;

    printf("enter two  numbers : ");
    scanf("%d,%d",&a,&b);

    printf("substraction of your number is : %d",sub(a,b));
}