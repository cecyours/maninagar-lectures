#include <stdio.h>

int sum(int a, int b)
{
    return a+b;
}
void main()
{
    int a, b;

    printf("Enter 2 numbers : ");
    scanf("%d,%d", &a, &b);
    

    printf("%d + %d = %d\n", a, b, sum(a,b));
}