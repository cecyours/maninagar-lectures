#include<stdio.h>

#define A 100

void main()
{
    printf("Initial value of A is : %d\n", A);

    #undef A 
    #define A 200

    printf("Value of A after change is : %d\n", A);

}