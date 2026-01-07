#include <stdio.h>

void main()
{
    int a, b;

    printf("Enter 2 numbers : ");
    scanf("%d,%d", &a, &b);

    a += b; // a = a+b;
    printf("value of a after += : %d\n", a);

    a *= b; // a = a*b;
    printf("value of a after *= : %d\n", a);
    a <<= b; // a = a<<b;
    printf("value of a after <<= : %d\n", a);
    a >>= b; // a = a&b;
    printf("value of a after >>= : %d\n", a);

    a %= 10; // a = a%10;
    printf("value of a after %%= : %d\n", a);
    
}