#include<stdio.h>

#define A 200
void main()
{


    printf("The initial value of A :  %d\n",A);

    #undef A
    #define A 300

    printf("The second value of A :  %d\n",A);


}