#include <stdio.h>

void main()
{
    int matrix[3][3] = {{1, 2, 3},
                  {4, 5, 6},
                  {7, 8, 9}};

    printf("Matrix \n\n");

    for(int row = 0; row < 3; row++)
    {
        for(int col = 0; col < 3; col++)
        {
            printf("%d ",matrix[row][col]);
        }
        printf("\n");
    }
}