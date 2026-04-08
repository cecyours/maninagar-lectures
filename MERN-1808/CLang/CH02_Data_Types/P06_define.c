#include<stdio.h>

#define A 100

void main() {
    printf("Value of A: %d\n",A);

    #undef A
    #define A 200

    printf("value of A Updated %d\n", A);
}