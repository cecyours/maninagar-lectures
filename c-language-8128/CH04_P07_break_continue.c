#include <stdio.h>
void main()
{
    int i;

    for (i = 1; i <= 10; i++)
    {

        if (i % 2 == 0)
        {
            // break;
            continue;
        }
        printf("line %d\n", i);
    }

    printf("rest statement...");
}