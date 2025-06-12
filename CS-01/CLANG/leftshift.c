#include <stdio.h>

int main()
{
    int a, b, c;
    printf("Enter Two Number :");

    scanf("%d , %d ", &a, &b);

    c = a << b;
    printf("Result is  %d", c);

    return 0;
}
