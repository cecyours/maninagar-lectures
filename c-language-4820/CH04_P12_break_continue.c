
#include <stdio.h>
void main()
{

    int i = 1;

    for (i = 1; i <= 10; i++)
    {

        if (i == 5)
        {
            // break;
            continue;
        }
        printf(" the line %d\n", i);
    }

    printf("the last statement");
}