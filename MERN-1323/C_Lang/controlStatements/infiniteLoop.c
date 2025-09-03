#include <stdio.h>

void main()
{
    int num = 1;

    for(;;)
    {
        if(num > 10)
        {
            break;
        }

        printf("Value of num is: %d\n", num);
        num++;
    }
}