#include<stdio.h>

void main(){

    int num;

    printf("enter a number : ");
    scanf("%d", &num);

    num = num + 100;

    printf("new number = %d\n", num);
}