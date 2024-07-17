#include <stdio.h>

void main()
{
    int a[100], n, i, min, max;

    printf("Enter the size : ");
    scanf("%d", &n);

    printf("Enter the data:\n");

    for (i = 0; i < n; i++)
    {
        printf("enter value for %d index : ", i);
        scanf("%d", &a[i]);
    }

    max = min= a[0];
    for (i = 0; i < n; i++)
    {
        if (a[i] > max)
        {
            max = a[i];
        }
        if (a[i] < min)
        {
            min = a[i];
        }
    }

    printf("the max %d\n", max);
    printf("the min %d\n", min);
}