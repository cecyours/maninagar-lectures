#include <stdio.h>
void main()
{
    int a[100], n, i, j, temp;

    printf("enter array size : ");
    scanf("%d", &n);

    printf("enter the data : \n");

    for (i = 0; i < n; i++)
    {
        printf("enter the value of %d index : ", i);
        scanf("%d", &a[i]);
    }
    for (i = 0; i < n; i++)
    {
        for (j = i + 1; j < n; j++)
        {
                if (a[i] < a[j])
                {
                    temp = a[i];
                    a[i] = a[j];
                    a[j] = temp;
                }
                
        }
    }

    for (i = 0; i < n; i++)
    {
        printf("a[%d] = %d \n", i, a[i]);
    }
}