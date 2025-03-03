#include <stdio.h>
#define A 3
void main()
{

#if A > 5
    printf("%d is greater then 5\n", A);
#elif A == 3
    printf("%d  is 3\n", A);
#endif

// #undef A

#ifdef A
    printf("A is define");
#else
    // printf("A is not define");
    #error "Please check"
#endif
}