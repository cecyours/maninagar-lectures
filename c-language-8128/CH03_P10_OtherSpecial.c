#include <stdio.h>
void main()
{
    int a = 10, *ptr;

    printf("the address of A : %p\n", &a);
    printf("      value of A : %d\n", a);

    ptr = &a;

    printf("using ptr, address of A : %p\n", ptr);
    printf("  using ptr, value of A : %d\n", ptr);

}