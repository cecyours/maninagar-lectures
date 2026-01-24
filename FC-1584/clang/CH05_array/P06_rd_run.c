#include <stdio.h>

void main()
{
    int matrix[10][10], i, j, n, m; // n for row, m for column

    printf("Enter no. of rows-columns : ");
    scanf("%d-%d", &n, &m);
    printf("Enter Matrix : \n");
    for (i = 0; i < n; i++)
    {
        for (j = 0; j < m; j++)
        {
            scanf("%d", &matrix[i][j]); // scanning matrix
        }
    }

    printf("\n------- MATRIX -----\n");
    for (i = 0; i < n; i++)
    {
        for (j = 0; j < m; j++)
        {
            printf("\t%d", matrix[i][j]);
        }
        printf("\n");
    }
}