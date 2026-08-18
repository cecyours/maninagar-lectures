#include<stdio.h>

int main()
{
    int a, b;

    printf("Enter Value of A: ");
    scanf("%d", &a);

    printf("Enter Value of B: ");
    scanf("%d", &b);

    printf("a + b = %d\n", a + b);
    printf("a - b = %d\n", a - b);
    printf("a * b = %d\n", a * b);
    printf("a / b = %d\n", a / b);
    printf("a %% b = %d\n", a % b);

    return 0;
}