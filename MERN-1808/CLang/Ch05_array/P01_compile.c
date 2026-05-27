#include<stdio.h>

void main(){
    int arr[5] = { 45, 67, 78, 56, 90 };
    int i;

    printf("Second Data: %d\n", arr[1]);
    printf("Last Data: %d\n", arr[4]);

    printf("\n-----------------------------\n\n");

    for ( i = 0; i < 5; i++)
    {
        /* code */
        printf("Data arr[%d] = %d\n",i,arr[i]);
    }
    
}