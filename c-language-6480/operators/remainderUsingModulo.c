#include <stdio.h>

void main()
{
    int a, b;
    
    printf("Please enter two numbers :\n");
    scanf("%d %d", &a, &b);

    int c = a % b;

    printf("Remainder is %d",c);
}