#include <stdio.h>
void main()
{
    int i, j, counter = 1;

    for (i = 1; i <= 10; i++)
    {
        for (j = 1; j <= 5; j++)
        {
            printf("\tline .... %d", counter++);
        }
        printf("\n");
    }
}