#include<stdio.h>
void main()
{
    int a[10][10][10][10][10];
    int i,j,k,l,m,n;
    int counter = 0;

    printf("Enter the size:- ");
    scanf("%d",&n);

    for(i=0;i<n;i++)
    {
        for(j=0;j<n;j++)
        {
            for(k=0;k<n;k++)
            {
                for(l=0;l<n;l++)
                {
                    for(m=0;m<n;m++)
                    {
                        a[i][j][k][l][m] = ++counter;
                    }
                }
            }
        }
    }
    for(i=0;i<n;i++)
    {
        printf("\n");
        for(j=0;j<n;j++)
        {
            for(k=0;k<n;k++)
            {
                for(l=0;l<n;l++)
                {
                    for(m=0;m<n;m++)
                    {
                        printf("%5d",a[i][j][k][l][m]);
                    }
                    printf("\t");
                }
                printf("\t");
            }
            printf("\n");
        }
    }
}