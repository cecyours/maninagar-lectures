#include<stdio.h>

#define A 20
void main()
{

    #if A>3
        printf("%d is greater than 3",A);
    #endif

    #error "there are error"
    

}