#include <stdio.h>

void main()
{
    int a[100], min, max, i, n;

    printf("Enter the size : ");
    scanf("%d", &n);
    printf("\nEnter the array : \n");
    for (i = 0; i < n; i++)
    {
        printf("Enter a[ %d ] = ", i);
        scanf("%d", &a[i]);
    }
    min = max = a[0];

    for (i = 0; i < n; i++)
    {
        if (a[i] < min)
        {
            min = a[i];
        }
        if (a[i] > max)
        {
            max = a[i];
        }
    }
    printf("minimum number : %d\n", min);
    printf("maximum number : %d\n", max);
    
}
