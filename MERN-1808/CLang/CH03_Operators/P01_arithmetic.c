#include<stdio.h>

void main(){
    int num1, num2, ans;

    printf("Enter two numbers : ");
    scanf("%d,%d", &num1, &num2);

    ans = num1%num2;

    printf("result: %d %% %d = %d\n", num1, num2, ans);
    
}