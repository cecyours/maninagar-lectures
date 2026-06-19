#include <stdio.h>

void sum() // no arguments , no return value
{
    int a, b, c;
    printf("\nEnter values as a+b : ");
    scanf("%d+%d", &a, &b);
    c = a + b;
    printf("%d + %d = %d\n", a, b, c);
}
void main() // main function
{
    
    sum();
    
}