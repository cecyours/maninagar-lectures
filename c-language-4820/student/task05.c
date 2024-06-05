#include<stdio.h>
void main()
{
    int a[3][3] ={
     {2,3,4},
     {3,5,4}}, i,j;


    printf("The data:-  %d\n", a[1][0]);
    printf("The data:-  %d\n", a[1][2]);
    printf("The data:-  %d\n", a[0][1]);

    printf("-----------------------------\n");
    for(i=0;i<2;i++)
    {
        for(j=0;j<3;j++)
        {
            printf(" %d ",a[i][j]);
        }
        printf("\n");       
    }
}