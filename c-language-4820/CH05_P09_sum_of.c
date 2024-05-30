#include <stdio.h>
void main()
{
    int a[100], n, i, min,max;

    printf("Enter the size of elements : ");
    scanf("%d", &n);

    printf("Enter the Data of elements  = \n");

    for (i = 0; i < n; i++)
    {
        printf("Enter data a[%d] : ", i);
        scanf("%d", &a[i]);
    }
    min=a[0];
    max=a[0];
    for (i = 0; i < n; i++)
    {
        if (a[i] < min)
        min;

        if(a[i]>max)
        max=a[i];
    }

    printf("the value is min : %d\n", min);
    printf("the value is max : %d\n", max);
}

/*

   n:[10,20,20,30]  sum:(sum + n)
                        10
                        30
                        50
                        80


 */