#include <stdio.h>

void main()
{
    int i = 10;
 
    printf("during post-decrement : %d\n", i--);
    printf(" after post-decrement : %d\n", i);
    printf("\n-----------------------\n\n");
    i = 10;
    printf(" during pre-decrement : %d\n", --i);
    printf("  after pre-decrement : %d\n", i);
   
}