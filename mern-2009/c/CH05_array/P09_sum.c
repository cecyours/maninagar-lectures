#include <stdio.h>

void main()
{
    int a[10][10], b[10][10], c[10][10];
    int i, j, n, m;

    printf("Enter rows-columns : ");
    scanf("%d-%d",&n,&m);

    printf("Enter matrix A: \n");
    for ( i = 0; i < n; i++)
    {
        /* code */
        for ( j = 0; j < m; j++)
        {
            /* code */
            scanf("%d", &a[i][j]);
        }
        
    }
    
    printf("Enter matrix B: \n");
    for ( i = 0; i < n; i++)
    {
        /* code */
        for ( j = 0; j < m; j++)
        {
            /* code */
            scanf("%d", &b[i][j]);
        }
        
    }

    for ( i = 0; i < n; i++)
    {
        /* code */
        for ( j = 0; j < m; j++)
        {
            /* code */
            c[i][j] = a[i][j] + b[i][j];
        }
        
    }

    printf("Matrix C: \n");
    for ( i = 0; i < n; i++)
    {
        /* code */
        for ( j = 0; j < m; j++)
        {
            /* code */
            printf("%d ", c[i][j]);
        }
        printf("\n");
        
    }
    
}