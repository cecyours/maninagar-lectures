#include<stdio.h>

void main(){
    
    char ch;
    int size;

    size = sizeof(ch);
    printf("Size of charactor: %d byte\n", size);

    size = sizeof(int);
    printf("Size of integer: %d byte\n", size);
}