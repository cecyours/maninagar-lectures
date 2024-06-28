#include<stdio.h>
#define A 300
void main()
{
    const float PI = 3.24;
    printf("the value of A : %d\n",A);

    #undef A
    #define A 30
    printf("the value of A : %d\n",A);


    printf("the value of PI : %f\n",PI);

}