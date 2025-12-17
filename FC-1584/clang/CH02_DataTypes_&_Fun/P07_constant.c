#include<stdio.h>

#define A 200

void main(){
    printf("value of A: %d\n", A);

    #undef A

    #define A 400

    printf("Value of A : %d \n", A );
}