#include <stdio.h>
void main()
{
    int a[10][10][10][10][10], i, j, k;
    int m, n, o, c, d;
    int e,b;
    int counter = 0;

    printf("Enter tables,rows,columns : ");
    scanf("%d,%d,%d,%d,%d", &n, &m, &o, &c, &d);

    for (i = 0; i < n; i++)
    {
        for (j = 0; j < m; j++)
        {
            for (k = 0; k < o; k++)
            {
                for (e = 0; e < c; e++)
                {
                    for (b=0; b<d;b++)
                    {
                        a[i][j][k][e][b] = ++counter;
                    }
                    
                }
                
            }
            
        }
        
    }

    for (i = 0; i < n; i++)
    {
        for (j = 0; j < m; j++)
        {
            for (k = 0; k < o; k++)
            {
                for(e=0; e<c; e++)
                {
                    for(b=0; b<d; b++)
                    {
                        printf("%3d  ",a[i][j][k][e][b]);
                    }
                    printf("\n");
                }
                printf("\n");
            }
            printf("\n");
        }
        printf("\n");
    }
}