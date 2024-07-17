#include <stdio.h>
void main()
{
    int i, n, a[100], max, min;

    printf("enter the size of array : ");
    scanf("%d", &n);

    printf("enter the data : \n");

    for (i = 0; i < n; i++)
    {
        printf("enter value %d of index : ", i);
        scanf("%d", &a[i]);
    }

    max = min = a[0];

    for (i = 0; i < n; i++)
    {
        if (a[i] > max)
        {
            /* code */
            max = a[i];
        }
        if (a[i] < min)
        {
            /* code */
            min = a[i];
        }
    }

    printf("Minimum value is : %d\n",min);
    printf("Maxmum value is : %d\n",max);


}