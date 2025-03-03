#include <stdio.h>
void main()
{
    int a[100], n, i, max, min;

    printf("Enter the size : ");
    scanf("%d", &n);

    printf("-----Enter the array-----\n");

    for (i = 0; i < n; i++)
    {
        printf("Enter number at {%d} place : ", i + 1);
        scanf("%d", &a[i]);
    }

    printf("----- Loading data...please wait -------\n");
    printf("\n");

    for (i = 0; i < n; i++)
    {
        printf("Array value at {%d} place : %d\n",i+1, a[i]);
    }

    printf("\n");
    
    printf("----------------------------------------\n");

    printf("\n");

    max = a[0];

    for (i = 0; i < n; i++)
    {
        if (max < a[i])
        {
            max = a[i];
        }
    }

    min = a[0];

    for (i = 0; i < n; i++)
    {
        if (min > a[i])
        {
            min = a[i];
        }
    }

    printf("Maximum number : %d\n", max);
    printf("Minimum number : %d\n", min);
}