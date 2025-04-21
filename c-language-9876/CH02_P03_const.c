#include<stdio.h>
#define A 100
void main()
{

    const int a=100;

    printf("value of A : %d\n",A); // 100
    
    // A = 20;
    #undef A
    #define A 200
    printf("value of A : %d\n",A); // 200


    printf("value of a : %d\n",a);
    // a = 100;
}