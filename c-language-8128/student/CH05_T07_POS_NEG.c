#include <stdio.h>
void main()
{
    int i, n, a[100], neg=0, pos=0;

    printf("enter the size of array : ");
    scanf("%d", &n);

    printf("enter the data : \n");

    for (i = 0; i < n; i++)
    {
        printf("enter value %d of index : ", i);
        scanf("%d", &a[i]);
    }

    for (i = 0; i < n; i++)
    {
        if (a[i] > 0)
        {
            pos++;
        }
        if (a[i] < 0)
        {
            neg++;
        }
    }

    printf("positive values is : %d\n",pos);
    printf("negative values is : %d\n",neg);


}