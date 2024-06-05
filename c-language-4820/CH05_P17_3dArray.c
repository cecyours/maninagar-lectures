#include <stdio.h>
void main()
{
    int a[10][10][10];
    int i, j, k;
    int n;
    int counter = 0;

    printf("Enter the size : ");
    scanf("%d", &n);

    // generate the array

    for (i = 0; i < n; i++)
    {
        for (j = 0; j < n; j++)
        {
            for (k = 0; k < n; k++)
            {
                a[i][j][k] = ++counter;
            }
        }
    }

    // display

    for (i = 0; i < n; i++)
    {
        printf(" \n");

        for (j = 0; j < n; j++)
        {
            for (k = 0; k < n; k++)
            {
                printf("%3d ", a[i][j][k]);
            }
            printf("\n");
        }
        printf(" \n");
    }

    printf(" the element : %d",a[1][1][0]);
}