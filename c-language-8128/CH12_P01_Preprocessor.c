#include <stdio.h>
#include "./CH12_P01_header.h"
#define A 100

#define sum(x, y) x + y # macro

void main()
{

    printf("value of A %d\n", A);

#undef A

#define J 300
    printf("value of A %d\n", J);

    printf("the sum : %d\n", sum(10, J));
    printf("the max : %d\n",max(10,40));
}
