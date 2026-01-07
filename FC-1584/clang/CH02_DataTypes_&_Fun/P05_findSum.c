#include<stdio.h>

void main(){
    int a, b, c;

    printf("Enter number value of a : ");
    scanf("%d", &a);

    printf("Enter NUmber value of b : "); 
    scanf("%d", &b);

    c = a + b;
    printf("%d + %d = %d \n", a, b, c);
}