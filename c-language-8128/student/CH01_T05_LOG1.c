#include<stdio.h>
void main()
{
    int a,b;
    char c;

    printf("enter two numbers and a operator : ");
    scanf("%d%c%d", &a,&c,&b);

    if (c=='+')
    {
        printf("addition of your numbers is : %d\n", a+b);
    }
    else if (c=='-')
    {
        printf("substraction of your numbers is : %d\n", a-b);
    }
    else if (c=='/')
    {
        printf("division of your numbers is : %d\n", a/b);
    }
    else if (c=='*')
    {
        printf("multiplication of your numbers is : %d\n", a*b);
    }
    else
    {
        printf("entered value is incorrect..");
    }
    
    
    
    
}