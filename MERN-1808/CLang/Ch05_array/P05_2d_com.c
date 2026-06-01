#include <stdio.h>

void main()
{
    
    int matrix[3][3] = {{1, 2, 3},
                        {4, 5, 6},
                        {7, 8, 9}};
    int i, j;
    
    printf("MATRIX \n\n");
    for (i = 0; i < 3; i++) // row
    {
        for (j = 0; j < 3; j++) // column
        {
            printf(" %d", matrix[i][j]);
        }
        printf("\n"); // new line for new row
    }
    
}