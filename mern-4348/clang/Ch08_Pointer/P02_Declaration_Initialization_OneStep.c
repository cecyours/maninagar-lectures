#include<stdio.h>

int main(){
    int num = 10;
    int *p = &num;

    printf("Address of num: %p\n", p);
    printf("Value of num using pointer:  %d\n", *p);

    *p = 20;
    printf("Updated value: %d\n", num);
}