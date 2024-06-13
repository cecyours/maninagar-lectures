#include<stdio.h>

int convert(int n)
    {
    return (n*-1);
}
void main()
{
    int n, x;

    printf("Enter your number:- ");
    scanf("%d",&n);

    x = convert(n);

    printf("The result is x %d:- ",x);
}
