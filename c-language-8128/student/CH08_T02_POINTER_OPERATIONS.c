#include <stdio.h>
void main()
{
    int a=10, b=20, c=30;
    int *ptr = &a;

    printf("the value of a at address %p : %d\n", &a,a);
    printf("the value of b at address %p : %d\n", &b,b);
    printf("the value of c at address %p : %d\n", &c,c);

    printf("\n------------values using pointer-----------\n");

    printf("the value of a at address %p : %d\n", ptr,*ptr);
    ptr--;
    printf("the value of b at address %p : %d\n", ptr,*ptr);
    ptr--;
    printf("the value of c at address %p : %d\n", ptr,*ptr);
}