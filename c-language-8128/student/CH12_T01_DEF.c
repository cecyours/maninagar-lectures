#include <stdio.h>
#define A 50

void main()
{
    printf("The value of A is : %d\n", A);

#if A > 100
    printf("A is greater than 100\n");

#elif A == 50
    printf("A is equal to 50\n");

#else
    printf("A is smaller than 100\n");

#endif

#ifdef A
    printf("A is defined!!\n");

#else
#error "please check the variable"

#endif
#undef A
#ifndef A
    printf("A is not defined!!\n");

#else
    printf("A is defined!!\n");

#endif
}