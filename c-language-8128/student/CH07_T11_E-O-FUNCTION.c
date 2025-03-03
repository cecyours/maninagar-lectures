#include<stdio.h>
int even_odd(int n)
{
    if(n%2==0)
        return 1;
    return 0;
}
void main()
{
    int n;
    printf("enter the number : ");
    scanf("%d",&n);

    if (even_odd(n))
    {
        printf("even..");
    }
    else
    {
        printf("odd..");
    }
    
}