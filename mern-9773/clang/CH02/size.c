#include<stdio.h>

void main() {

    char ch = 5;
    int size = 6;

    size = sizeof(ch);
    printf("Size of charactor: %d byte\n", size);

    size = sizeof(int);
    printf("size of integer: %d byte\n", size);



}