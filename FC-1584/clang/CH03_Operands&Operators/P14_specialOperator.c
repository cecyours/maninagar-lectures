#include<stdio.h>

void main(){

    int a = 10;

    int *p = &a;

    printf("a: Adress %p\t data: %d\n", &a, a);
    printf("p: Adress %p\t data: %d\n", p, *p);

    printf("Int: %d\n", sizeof(int));
}
