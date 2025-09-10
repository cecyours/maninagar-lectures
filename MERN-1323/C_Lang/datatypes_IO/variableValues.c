#include <stdio.h>
#define key 16

void main()
{
    int num = 45;
    printf("Value of num before change : %d", num);

    num = key;
    printf("Value of num after change : %d", num);
}