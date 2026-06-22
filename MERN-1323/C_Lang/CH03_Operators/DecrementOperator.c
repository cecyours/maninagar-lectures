#include <stdio.h>

void main()
{
    int a = 5;

    printf("Value of a during pre-decrement : %d\n", --a);
    printf("Value of a after pre-decrement : %d\n", a);

    a = 5;
    printf("Value of a during post-decrement : %d\n", a--);
    printf("Value of a after post-decrement : %d\n", a);
}