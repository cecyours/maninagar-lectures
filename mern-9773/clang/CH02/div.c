#include<stdio.h>

void main() {
    int num1, num2, num3;
    printf("enter 1 value: ");
    scanf("%d",  &num1);

    printf("enter 2 value: ");
    scanf("%d", &num2);

    num3 = num1 / num2;
    printf("%d / %d = %d", num1, num2, num3);
}
