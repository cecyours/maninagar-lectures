#include <stdio.h>

int main()
{

    int i = 10;

    printf("This is value of %d\n", i--);
    printf("This is value of %d\n", i);

    i = 10;
    printf(" during pre-increment : %d\n", --i);
    printf("This is value of %d", i);
    return 0;
}
