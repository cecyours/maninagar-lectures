#include <stdio.h>

#define A 200

int main()
{

    const float PI = 3.45;
    printf(" Value of A : %d\n", A);

#undef A
#define A 4000

    printf(" Value of A : %d\n", A);

    printf(" Value of PI : %.2f\n", PI);
    return 0;
}
