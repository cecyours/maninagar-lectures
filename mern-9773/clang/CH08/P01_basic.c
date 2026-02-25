#include<stdio.h>

int main(){
    int num = 100;
    int *p;
    p = &num;

    printf("Address of num: %p\n", p);
    printf("Value of num using pointer:  %d\n", *p);

    return 0;
}