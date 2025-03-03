#include <stdio.h>
void main()
{
    int a[10][10][10] , i,j,k,m=3,n=3,o=3;
    printf("enter the size of array (3,3,3): ");
    scanf("%d,%d,%d",&n,&m,&o);

    printf("enter the array : \n");
    for ( i = 0; i < n; i++)
    {
        for(j=0; j<m; j++)
        {
            for(k=0; k<o; k++)
            {
                scanf("%d",&a[i][j][k]);   
            }
        }
    }
    
    printf("--------------------\n");


    for ( i = 0; i < n; i++)
    {
        for(j=0; j<m; j++)
        {
            for(k=0; k<o; k++)
            {
                printf("%2d ", a[i][j][k]);
            }
            printf("\n");
        }
        printf("\n");
    }
    
}