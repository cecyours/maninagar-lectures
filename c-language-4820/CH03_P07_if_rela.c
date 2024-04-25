
#include <stdio.h>
void main()
{
    int a, b;
    printf("enter 2 numbers : ");
    scanf("%d,%d", &a, &b);

    if (a > b)
    {
        printf("%d is greater than %d\n", a, b);
    }

    if (a < b)
    {
        printf("%d is less than %d\n", a, b);
    }
}