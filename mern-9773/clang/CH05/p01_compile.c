#include <stdio.h>

void main()
{
    int a[5] = {35, 88, 35, 23, 45};
    int i;

    printf("first data : %d\n", a[0]);
    printf(" last data : %d\n", a[4]);
    printf("\n-----------------\n\n");
    for (i = 0; i < 5; i++)
    {
        printf("data a[ %d ] = %d\n", i, a[i]);
    }
}