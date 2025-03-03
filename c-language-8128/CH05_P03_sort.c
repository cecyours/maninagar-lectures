#include <stdio.h>

/*
    2 ,3, 1, 6, 7.3


 */
void main()
{
    int a[100], n, i, temp, j;

    printf("Enter the size of array : ");
    scanf("%d", &n);

    printf("Enter the elements : \n");

    for (i = 0; i < n; i++)
    {
        printf("Enter element for %d index : ", i);
        scanf("%d", &a[i]);
    }

    // sort
    for (i = 0; i < n; i++)
    {

        for (j = i + 1; j < n; j++)
        {

            if (a[i] > a[j])
            {
                temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
        printf("\n");
    }
    // display
    for (i = 0; i < n; i++)
    {
        printf("a[%d] = %d\n", i, a[i]);
    }
}