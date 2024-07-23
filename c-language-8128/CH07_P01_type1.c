#include <stdio.h>

void sum()
{
    int a, b;

    printf("Enter 2 numbers : ");
    scanf("%d,%d", &a, &b);

    printf("%d + %d = %d\n", a, b, a + b);
}
void main()
{

    sum();
}