#include<stdio.h>

void main() {
    int num;

    printf("Enter Number: ");
    scanf("%d", &num);

    (num % 2 == 0) ? printf("number even \n") : printf("Number odd ");
    
}