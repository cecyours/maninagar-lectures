#include <stdio.h>

int main()
{

    int a[100], min, max, i, n;
    printf("Enter The Size : ");
    scanf("%d", &n);

    printf("Enter The Data\n");

    for (i = 0; i < n; i++)
    {
        printf("Enter a[ %d ] = ", i);
        scanf("%d", &a[i]);
    }

    min = max = a[0]; //

    for (i = 0; i < n; i++)
    {
        if (a[i] < min)
        { // if a[i] is less than min, then update min with a[i]
            min = a[i];
        }

        if (a[i] > max)
        { // if a[i] is greater than max,then update max with a[i]
            max = a[i];
        }
    }

    printf("minimum number : %d\n", min);
    printf("maximum number : %d\n", max);

    return 0;
}
