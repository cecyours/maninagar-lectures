#include <stdio.h>

void main()
{
    int row, col;

    printf("Please enter number of rows and columns :");
    scanf("%d %d", &row, &col);

    int mat1[row][col], mat2[row][col];
    int res[row][col];

    for(int r = 0; r < row; r++)
    {
        for(int c = 0; c < col; c++)
        {
            scanf("%d ", &mat1[r][c]);
        }
    }

    printf("Enter values in second marix");

    for(int r = 0; r < row; r++)
    {
        for(int c = 0; c < col; c++)
        {
            scanf("%d ", &mat2[r][c]);
        }
    }

    for(int r = 0; r < row; r++)
    {
        for(int c = 0; c < col; c++)
        {
            res[r][c] = mat1[r][c] + mat2[r][c];
        }
    }
    

    for(int r = 0; r < row; r++)
    {
        for(int c = 0; c < col; c++)
        {
            printf("%d ", res[r][c]);
        }

        printf("\n");
    }



}