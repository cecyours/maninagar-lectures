#include<stdio.h>

#define A 67
void main(){
    printf("Value of A: %d\n", A);

    // A = 90;

    #undef A

    #define A 13

    printf("Value of A: %d\n", A);

}