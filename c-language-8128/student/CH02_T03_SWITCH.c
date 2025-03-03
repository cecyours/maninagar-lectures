#include<stdio.h>

void sum(int a,int b)
{ 
    
    printf("your sum is : %d",a+b);
}
void sub(int a, int b)
{
    
    printf("your substraction is : %d",a-b);
}
void mult(int a, int b)
{
    printf("your multipication is : %d",a*b);
}
void div(int a, int b)
{
    printf("your division is : %d",a/b);
}
void main()
{
    int a,b;
    char c;

    printf("enter number : ");
    scanf("%d%c%d",&a,&c,&b);

    switch (c)
    {
    case '+' : 
        sum(a,b);
        break;
    case '-' : 
        sub(a,b);
        break;
    case '*' : 
        mult(a,b);
        break;
    case '/' : 
        div(a,b);
        break;
    default:
        printf("You entered invalid operator..");
        break;
    }
}