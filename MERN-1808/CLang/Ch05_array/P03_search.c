#include <stdio.h>

void main()
{
    int a[100], i, n, data;
    int f = 0; 

    printf("Enter the size : ");
    scanf("%d", &n);
    printf("Enter the array : \n");

    for (i = 0; i < n; i++)
    {
        printf("Enter a[ %d ] = ", i);
        scanf("%d", &a[i]);
    }

    printf("Enter the data to search : ");
    scanf("%d", &data);

    for (i = 0; i < n; i++)
    {
        if (data == a[i])
        {
            printf("%d found at %d index.\n", data, i);
            f = 1;
        }
    }

    if (!f) 
    {
        printf("sorry, %d not found in the given array.", data);
    }
    
}