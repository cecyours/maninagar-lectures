#include<stdio.h>

int j; // global

void main() {
    int i; // local

    printf("Defult value at local scope: %d\n", i);
    printf("Defult value at global scope: %d\n", j);
}