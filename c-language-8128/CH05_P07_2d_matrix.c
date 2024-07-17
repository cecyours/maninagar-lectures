#include <stdio.h>
void main()
{
    int a[3][3] = {{1, 2, 3},
                   {3, 2, 7},
                   {4, 9, 0}};
    int i, j;

    for (i = 0; i < 3; i++)
    {
        for (j = 0; j < 3; j++)
        {
            printf(" %2d ", a[i][j]);
        }

        printf("\n");
    }
}