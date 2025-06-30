#include <stdio.h>

int main()
{

    int a[5] = {
        1,
        2,
        3,
        4,
        5};
    int i;

    printf("The First Value of array is   %d\n", a[0]);
    printf("The Last  Value of array is   %d\n", a[4]);

    printf("\n-----------------\n\n");

    for (i = 0; i < 5; i++)
    {
        printf("data a[ %d ] = %d\n", i, a[i]);
    }

    return 0;
}
