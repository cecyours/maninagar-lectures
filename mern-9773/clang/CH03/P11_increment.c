#include <stdio.h>

void main()
{
    int i = 10;

    printf("during post-increment : %d\n", i++);
    printf(" after post-increment : %d\n", i);

    printf("\n-----------------------\n\n");

    i = 10; // reset the value.
    printf(" during pre-increment : %d\n", ++i);
    printf("  after pre-increment : %d\n", i);
}