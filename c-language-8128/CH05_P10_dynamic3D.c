#include <stdio.h>
void main()
{
    int a[10][10][10], i, j, k;
    int m, n, o;
    int counter = 0;

    printf("Enter tables,rows,columns : ");
    scanf("%d,%d,%d", &n, &m, &o);

    for (i = 0; i < n; i++)
    {
        for (j = 0; j < m; j++)
        {
            for (k = 0; k < o; k++)
            {
                a[i][j][k] = ++counter;
            }
        }
    }

    for (i = 0; i < n; i++)
    {
        for (j = 0; j < m; j++)
        {
            for (k = 0; k < o; k++)
            {
                printf("%3d ", a[i][j][k]);
            }
            printf("\n");
        }
        printf("\n");
    }
}