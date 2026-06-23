#include<stdio.h>

int main(){
    int arr[5] = { 10, 20, 30, 40, 50 };
    int *p = arr;

    printf("Pointer arithmetic:\n");

    printf("First element: %d\n", *p);

    p++;
    printf("First element: %d\n", *p);

    p +=2;
    printf("First element: %d\n", *p);

    p--;
    printf("First element: %d\n", *p);

    printf("Distance between fourth and first element: %ld\n", p - arr);

    return 0;
}