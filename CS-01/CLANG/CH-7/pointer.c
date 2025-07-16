#include <stdio.h>

int main()
{

    int a = 10;

    int *p;

    p = &a;

    printf(" a -> Value : %d\t address : %p\n", a, &a);
    printf(" p -> Value : %d\t address : %p\n", *p, p);
    return 0;
}
