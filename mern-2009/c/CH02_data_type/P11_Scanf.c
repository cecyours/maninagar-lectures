#include<stdio.h>

void main() {
    int num;
    printf("Enter a number: ");
    scanf("%d", &num);

    num = num + 100;

    printf("New Number: %d\n", num);

}