#include <stdio.h>

void main()
{
    int i = 1;

    for (; i <= 10; i++)
    {
        if (i == 6)
        {
            break; // break statement
        }
        printf("line %d.\n", i);
    }
    printf("\nhello world"); // rest statements

}