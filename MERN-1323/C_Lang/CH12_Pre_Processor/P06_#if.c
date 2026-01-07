#include <stdio.h>

#define NUM 10

#if NUM > 5
    #define MESSAGE "NUM is greater than 5"
#endif

int main()
{
    printf("%s", MESSAGE);
    return 0;
}