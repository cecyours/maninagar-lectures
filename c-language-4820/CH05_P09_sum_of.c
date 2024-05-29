#include <stdio.h>
void main()
{
    int a[100], n, i, sum = 0;

    printf("Enter the size of elements : ");
    scanf("%d", &n);

    printf("Enter the Data of elements  = \n");

    for (i = 0; i < n; i++)
    {
        printf("Enter data a[%d] : ", i);
        scanf("%d", &a[i]);
    }

    for (i = 0; i < n; i++)
    {
        if (a[i] < 0)
        {
            sum = sum + a[i];
        }
    }

    printf("the final sum : %d\n", sum);
}

/*

   n:[10,20,20,30]  sum:(sum + n)
                        10
                        30
                        50
                        80


 */