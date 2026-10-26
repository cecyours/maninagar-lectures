#include<stdio.h>

void main() {
    int a[100];
    int i, n;

   printf("Enter the size of array: ");
   scanf("%d", &n);

   printf("Enter the data: \n");

    for ( i = 0; i < n; i++)
    {
        /* code */
        printf("enter a[%d] =", i);
        scanf("%d", &a[i]);
    }

    printf("\n-------------------\n\n");

    for ( i = 0; i < n; i++)
    {
        /* code */
        printf("a[%d] = %d\n", i, a[i]);
    }

    
}