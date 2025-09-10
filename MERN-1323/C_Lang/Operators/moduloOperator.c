#include <stdio.h>
#include <conio.h>

void main()
{
    int a, b;

    printf("Please enter two numbers:\n");
    scanf("%d %d", &a, &b);

    int c = a % b;
    printf("Value of C : %d", c);
}