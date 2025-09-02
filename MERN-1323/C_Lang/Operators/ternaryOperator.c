#include <stdio.h>

void main()
{
    int a, b;

    printf("enter two numbers:");
    scanf("%d %d", &a, &b);

    int c = (a < b)? a : b;
    printf("The smallest number is: %d\n", c);
}