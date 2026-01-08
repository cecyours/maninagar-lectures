#include<stdio.h>

void main() {
    int num1, num2, ans;

    printf("Enter 1 value: ");
    scanf("%d", &num1);

    printf("Enter 2 value: ");
    scanf("%d", &num2);

    ans = num1 + num2;

    printf("%d + %d = %d",num1, num2, ans);
    
}