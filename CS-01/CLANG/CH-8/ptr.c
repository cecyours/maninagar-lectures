#include <stdio.h>

int main()
{

    int a = 10;
    int *ptr;

    ptr = &a;

    printf("This is value of  : %d ", *ptr);

    return 0;
}
