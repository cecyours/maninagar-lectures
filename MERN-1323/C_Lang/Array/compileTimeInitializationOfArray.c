#include <stdio.h>

void main()
{
    int a[5] = {56,25,57,68,78};
    for(int index = 0; index < 5; index++)
    {
        printf("Data at a[%d] is %d.\n", index, a[index]);
    }
}