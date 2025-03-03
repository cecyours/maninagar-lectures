#include <stdio.h>
void main()
{
    int a = 10;

    printf("during post increment : %d\n", a++); // 1-
    printf(" after post increment : %d\n", a);   // 11

    printf("during pre increment : %d\n", ++a); // 12
    printf(" after pre increment : %d\n", a);   // 12

    printf("during post decrement : %d\n", a--); // 12
    printf(" after post decrement : %d\n", a);   // 11

    printf("during pre decrement : %d\n", --a); // 10
    printf(" after pre decrement : %d\n", a);   // 10
}