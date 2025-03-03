#include <stdio.h>
void main()
{
    int a[100], n, i, sum = 0;

    printf("Enter the size : ");
    scanf("%d", &n);

    printf("Enter the data:\n");

    for (i = 0; i < n; i++)
    {
        printf("enter value for %d index : ", i);
        scanf("%d", &a[i]);
    }

    printf("\n-----------------\n");

    for (i = 0; i < n; i++)
    {
        printf("%2d ", sum);
        sum = sum + a[i];

        printf("+ %2d = %2d\n", a[i], sum);
    }
    printf("\n-----------------\n");

    printf("the final  sum %d\n", sum);

    // for(i=0;i<n;i++)
    // {
    //     printf("a[%2d] => %d\n",i,a[i]);
    // }
}