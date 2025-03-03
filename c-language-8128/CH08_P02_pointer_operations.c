#include <stdio.h>
void main()
{
    int a = 10, b = 20, c = 30;
    int *ptr = &a;

    printf("the address, value of a => %d at %p\n", a, &a);
    printf("the address, value of b => %d at %p\n", b, &b);
    printf("the address, value of c => %d at %p\n", c, &c);

    printf("\n------using pointer--------\n");

    printf("the address, value of a => %d at %p\n", *ptr, ptr);
    ptr--;
    printf("the address, value of b => %d at %p\n", *ptr, ptr);
    ptr--;
    printf("the address, value of c => %d at %p\n", *ptr, ptr);
}