#include <stdio.h>

void main()
{
    int row, col;

    printf("Please enter number of rows and columns :");
    scanf("%d %d", &row, &col);

    int mat[row][col];

    for(int r = 0; r < row; r++)
    {
        for(int c = 0; c < col; c++)
        {
            scanf("%d ", &mat[r][c]);
        }
    }

    for(int r = 0; r < row; r++)
    {
        for(int c = 0; c < col; c++)
        {
            printf("%d ", mat[r][c]);
        }

        printf("\n");
    }
}