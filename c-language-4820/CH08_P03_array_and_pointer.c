#include <stdio.h>
void main()
{
    int a[100];
    int n, i;
    int *ptr = a;
    // int *ptr = &a[0];
    printf("Enter the size : ");
    scanf("%d", &n);

    printf("Enter the data : \n");
    for (i = 0; i < n; i++)
    {
        printf("Enter a[ %d ] = ", i);
        scanf("%d", ptr+i);
    }

    // ---------------

    printf("the address base of array : %u\n", a);
    printf("the address first of array : %u\n", &a[0]);

    printf("--------------\n");

    for (i = 0; i < n; i++)
    {
        printf("a[%d] = %d at %u\n", i, a[i], &a[i]);
    }
}