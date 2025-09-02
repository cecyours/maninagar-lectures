#include <stdio.h>

void main()
{
    int a = 5;

    printf("Value of a during pre-increment : %d\n", ++a);
    printf("Value of a after pre-increment : %d\n", a);

    a = 5;

    printf("Value of a during post-increment : %d\n", a++);
    printf("Value of a after post-increment : %d\n", a);
    
}