#include<stdio.h>

void sum(int a,int b)
{
    printf("%d + %d = %d\n",a,b,a+b);
}
void mul(int a,int b)
{
    printf("%d * %d = %d\n",a,b,a*b);
}
void sub(int a,int b)
{
    printf("%d - %d = %d\n",a,b,a-b);
}
void div(int a,int b)
{
    printf("%d / %d = %d\n",a,b,a/b);
}
void main()
{
    int x,y;

    printf("Enter 2 numbers : ");
    scanf("%d,%d",&x,&y);

    sum(x,y);
    mul(x,y);
    sub(x,y);
    div(x,y);
}