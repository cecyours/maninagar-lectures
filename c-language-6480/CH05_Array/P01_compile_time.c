#include<stdio.h>

void main(){
    int a[5] = {12, 78, 89, 45, 10};
    int i;

    printf("First Data: %d\n", a[0]);
    printf("Last Data: %d\n", a[4]);

    printf("\n------------------\n\n\n");

    for ( i = 0; i < 5; i++)
    {
        /* code */
        printf("Data a[%d] = %d\n", i, a[i]);
    }
    
}