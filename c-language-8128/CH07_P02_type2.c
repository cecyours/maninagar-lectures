#include <stdio.h>

void sum(int a, int b)
{

    printf("%d + %d = %d\n", a, b, a + b);
}
void main()
{
    int a, b;

    printf("Enter 2 numbers : ");
    scanf("%d,%d", &a, &b);
    sum(a,b);
}