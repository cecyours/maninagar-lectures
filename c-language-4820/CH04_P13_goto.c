#include <stdio.h>
void main()
{

    printf("line a\n");
    goto home;
    printf("line b\n");
    printf("line c\n");

home:
    printf("line d\n");
    printf("line e\n");

    printf("line 1\n");
hell:
    printf("line 2\n");
    printf("line 3\n");
    printf("line 4\n");
    goto hell; // background jump
    printf("line 5\n");
}