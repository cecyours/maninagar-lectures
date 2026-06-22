#include<stdio.h>

void main() {
    int a, b, c;
    printf("Enter two numbre : ");
    scanf("%d,%d", &a, &b);

    c = a % b;

    printf("Ans: %d", c);

}