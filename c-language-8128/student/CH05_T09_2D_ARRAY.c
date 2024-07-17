#include <stdio.h>
void main()
{
    int a[10][10], i, j, n, m;
    printf("enter the number of rows, no. of columns : ");
    scanf("%d,%d", &n, &m);

    printf("enter the array : \n");
    for (i = 0; i < n; i++)
    {
        for (j = 0; j < m; j++)
        {
            scanf("%d", &a[i][j]);
        }
    }
    printf("\n-------------------\n");

    printf("your entered arry is : ");

    
    for (i = 0; i < n; i++)
    {
        for (j = 0; j < m; j++)
        {
            printf(" %2d  ", a[i][j]);
        }
        printf("\n");
    }
}