#include <stdio.h>

// with argument and without return value

void sum(int a, int b)
{
    int c;
    c = a + b;
    printf("the sum is %d", c);
}

int main()
{

    int a, b, c;

    printf("\nEnter values as a+b : ");
    scanf("%d+%d", &a, &b);

    sum(a, b);
    return 0;
}
