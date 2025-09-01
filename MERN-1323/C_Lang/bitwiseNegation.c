#include <stdio.h>
#include <conio.h>

void main()
{
    int a, b;

    printf("Please enter one number :\n");
    scanf("%d", &a);

    int c = ~a;
    printf("Bitwise negation of a is : %d", c);
}