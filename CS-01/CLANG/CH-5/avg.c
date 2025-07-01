#include <stdio.h>

int main()
{

    float a[100], sum = 0, avg;
    int i, n;
    printf("Enter The Size : ");
    scanf("%d", &n);

    printf("Enter The Data\n");

    for (i = 0; i < n; i++)
    {
        printf("Enter a[ %d ] = ", i);
        scanf("%f", &a[i]);
        sum = sum + a[i]; // addition of all element into 'sum'
    }

    avg = sum / n;

    printf("\nsum : %.2f,\t", sum);
    printf("avg : %.2f\n", avg);

    return 0;
}
