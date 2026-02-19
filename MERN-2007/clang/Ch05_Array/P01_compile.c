#include<stdio.h>

void main() {

    int a[5] = {12, 67, 56, 78, 67};

    printf("First index: %d\n", a[0]);
    printf("Last index: %d\n", a[4]);

    printf("\n---------------------\n\n");

    for (int i = 0; i < 5; i++)
    {
        /* code */
        printf("Data a[%d] = %d\n",i, a[i]);
    }
    

}