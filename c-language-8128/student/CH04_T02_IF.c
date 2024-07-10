#include<stdio.h>
void main()
{
    int a,b,c;
    char ch;


    printf("enter two numbers with operators(1+3) : ");
    scanf("%d%c%d",&a,&ch,&b);


    if(ch=='+')
    {
        printf("%d + %d = %d", a,b,a+b);

    }
    else if (ch=='-')
    {
        /* code */
        printf("%d - %d = %d", a,b,a-b);
    }
    else if(ch=='*')
    {
        printf("%d * %d = %d", a,b,a*b);
    }
    else if (ch=='/')
    {
        /* code */
        printf("%d / %d = %d", a,b,a/b);
    }
    else
    {
        printf("invalid..");
    }
    

}