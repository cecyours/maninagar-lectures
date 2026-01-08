#include<stdio.h>

#define A 200
void main() {

    printf("Value of A: %d\n", A);
    // A = 100

    #undef A

    #define A 100

    printf("Value of A: %d\n", A);

    
}