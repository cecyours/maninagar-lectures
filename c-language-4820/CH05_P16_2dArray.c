#include <stdio.h>
void main()
{
    int a[3][3] = {
        {2, 6, 3},
        {3, 5, 6}};
    int i, j;

    printf("the data : %d\n", a[0][1]); // 6
    printf("the data : %d\n", a[1][2]); // 6
    printf("the data : %d\n", a[1][0]); // 3

    printf("-------------------\n");
    for (i = 0; i < 2; i++)
    {
        for (j = 0; j < 3; j++)
        {
            printf(" %d ", a[i][j]);
        }
        printf("\n");
    }
}