#include <stdio.h>

int main()
{

    int matrix[10][10], i, j, n, m;

    printf("Enter no. of rows-columns : ");
    scanf("%d-%d", &n, &m);

    for (i = 0; i < n; i++)
    {
        for (j = 0; j < m; j++)
        {
            scanf("%d", &matrix[i][j]);
        }
    }
    printf("Matrix\n");

    for (i = 0; i < n; i++)
    {
        for (j = 0; j < m; j++)
        {
            printf("\t%d", matrix[i][j]);
        }
        printf("\n");
    }

    return 0;
}
