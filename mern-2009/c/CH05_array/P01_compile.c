#include<stdio.h>

void main() {
    int a[5] = {12, 23, 21, 33, 88};
    int i;

    printf("First data: %d\n", a[0]);
    printf("last data: %d\n", a[4]);

    printf("\n----------------------------\n\n");

    for ( i = 0; i < 5; i++)
    {
        /* code */
        printf("Data a[%d] = %d\n", i, a[i]);
    }
    
}