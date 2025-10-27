#include<stdio.h>

void sum(){
    int a, b, c;

    printf("\n Enter the Value A+B: " );
    scanf("%d+%d", &a, &b);

    c = a+b;

    printf("%d + %d = %d\n", a, b, c);
}

void main() {
    sum();
}