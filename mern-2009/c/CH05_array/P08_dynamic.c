#include <stdio.h>

int main()
{
    int matrix[10][10], i, j, n, m;

    printf("Enter number of rows and columns: ");
    scanf("%d %d", &n, &m);

    printf("Enter Matrix:\n");

    for(i = 0; i < n; i++)
    {
        for(j = 0; j < m; j++)
        {
            scanf("%d", &matrix[i][j]);
        }
    }

    printf("\n------ MATRIX ------\n");

    for(i = 0; i < n; i++)
    {
        for(j = 0; j < m; j++)
        {
            printf("%d ", matrix[i][j]);
        }
        printf("\n");
    }

    return 0;
}