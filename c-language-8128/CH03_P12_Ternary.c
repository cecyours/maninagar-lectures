#include <stdio.h>
void main()
{
    int a, b, max;

    printf("Enter 2 numbers : ");
    scanf("%d,%d", &a, &b);

    max = (a > b) ? a : b;


    printf("the max is %d\n",max);
}