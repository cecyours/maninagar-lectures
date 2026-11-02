#include <stdio.h>

void main()
{
    int a[100], i, n, temp, j;

    printf("Enter the size:");
    scanf("%d", &n);

    printf("\n Enter the array: \n");
    for (i = 0; i < n; i++)
    {
        /* code */
        printf("Enter a[%d] = ", i);
        scanf("%d", &a[i]);
    }

    for (i = 0; i < n; i++)
    {
        /* code */
        for (j = i + 1; j < n; j++)
        {
            /* code */
            if (a[i] > a[j])
            {
                /* code */
                temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }

    printf("\nsorted array : \n");
    
    for (i = 0; i < n; i++)
    {
        printf("a[ %d ] = %d\n", i, a[i]);
    }

}