#include <stdio.h>

// This is a simple Hello World program
int main()
{
    int a, b, c;

    printf("Enter First Number :  ");
    scanf("%d", &a);

    printf("Enter Second Number : ");
    scanf("%d", &b);
  
    c = a + b;

    printf("Sum of %d and %d = %d", a, b, c);

    return 0;
}
