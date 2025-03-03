#include<stdio.h>
int fact(int n)
{
    int i,fact=1;

    for ( i = 1; i <= n; i++)
    {
        fact = fact*i;
    }

    return fact;
}
void main()
{
    int n;

    printf("enter the number : ");
    scanf("%d",&n);
    
    printf("factorial of your number (%d) is : %d",n,fact(n));
    
}