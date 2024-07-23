#include <stdio.h>

int sum()
{
    int a, b;

    printf("Enter 2 numbers : ");
    scanf("%d,%d", &a, &b);

    return a + b;
}
void main()
{

    printf("the sum : %d\n",sum());
    
}