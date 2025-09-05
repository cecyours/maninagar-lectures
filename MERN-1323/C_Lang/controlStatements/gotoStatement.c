#include <stdio.h>

void main()
{
    printf("Line 1\n");
    printf("Line 2\n");
    printf("Line 3\n");
    goto rosewin;

    printf("Line 4\n");
    printf("Line 5\n");
    printf("Line 6\n");
rosewin:
    printf("Line 7\n"); 
    printf("Line 8\n");
}