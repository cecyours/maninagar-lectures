#include <stdio.h>

void main()
{
    int a, b, c; // declaring 3 variables.

    printf("Enter number : ");
    scanf("%d", &a); // input a
    
    printf("Enter number : ");
    scanf("%d", &b); // input b
    
    c = a + b;       // sum of a,b stored in c
    printf("%d + %d = %d\n", a, b, c);
    
}