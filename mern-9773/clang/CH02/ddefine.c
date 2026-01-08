#include<stdio.h>
  #define A 66

void main() {
     printf("Value of A : %d\n", A);

// A = 100

    #undef A

    #define A 100

    printf("Value of A: %d\n", A);






}