#include <stdio.h>

// 1. without argument and without return value.

void sum()
{
    int a, b, c;

    printf("\nEnter values as a+b : ");
    scanf("%d+%d", &a, &b);

    c = a + b;
    printf("the sum is %d", c);
}

int main()
{

    sum();
    return 0;
}
