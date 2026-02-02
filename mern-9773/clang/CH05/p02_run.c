#include <stdio.h>

void main()
{
    int a[100];
    int n; // temporary size
    int i;

    printf("Enter the size of array : ");
    scanf("%d", &n);
    printf("Enter the data : \n");
    for (i = 0; i < n; i++) // loop for getting data
    {
        printf("enter a[ %d ] = ", i);
        scanf("%d", &a[i]);
    }
    printf("----------------\n"); // partition
    for (i = 0; i < n; i++)
    {
        printf("a[ %d ] = %d\n", i, a[i]);
    }
}