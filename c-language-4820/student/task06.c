#include<stdio.h>
void main()
{
    int a[3][3],i,j,n;
    

    printf("Enter the size:- ");
    scanf("%d",&n);

    printf("Enter your data \n");
    
    for(i=0;i<n;i++)
    {
        for ( j = 0; j < n; j++)
        {
                printf("your data a[%d][%d] : ",i,j);
                scanf("%d",&a[i][j]);
        }
    }

    printf("-------------------------\n");

    for(i=0;i<n;i++)
    {
        for(j=0;j<n;j++)
        {
            printf(" %d ",a[i][j]);
        }
        printf("\n");
    }
}