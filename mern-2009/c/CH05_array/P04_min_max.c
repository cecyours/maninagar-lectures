#include <stdio.h>

void main()
{
    int a[100], min, max, i, n;

    printf("Enter the size:");
    scanf("%d", &n);

    printf("\n Enter the array: \n");
    for (i = 0; i < n; i++)
    {
        /* code */
        printf("Enter a[%d] = ", i);
        scanf("%d", &a[i]);
    }

    min = max = a[0];

    for ( i = 0; i < n; i++)
    {
        /* code */
        if (a[i] < min)
        {
            /* code */
            min = a[i];
        }

        if (a[i] > max)
        {
            max = a[i];
        }
        
    }

    printf("Minimum number: %d\n", min);
    printf("Maximum number: %d\n", max);
    
    
}