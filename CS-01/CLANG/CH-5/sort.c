#include <stdio.h>

int main()
{

    int a[100], temp, i, j, n;
    int f = 0;

    printf("Enter The Size : ");
    scanf("%d", &n);

    printf("Enter The Data\n");

    for (i = 0; i < n; i++)
    {
        printf("Enter a[ %d ] = ", i);
        scanf("%d", &a[i]);
    }

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
    }

    printf("\nsorted array : \n");
    for (i = 0; i < n; i++)
    {
        printf("a[ %d ] = %d\n", i, a[i]);
    }
    return 0;
}
