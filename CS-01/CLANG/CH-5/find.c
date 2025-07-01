#include <stdio.h>

int main()
{

    int a[100], data, i, n;
    int f = 0;

    printf("Enter The Size : ");
    scanf("%d", &n);

    printf("Enter The Data\n");

    for (i = 0; i < n; i++)
    {
        printf("Enter a[ %d ] = ", i);
        scanf("%d", &a[i]);
    }

    printf("Enter the data to search : ");
    scanf("%d", &data);

    for (i = 0; i < n; i++)
    {
        if (data == a[i])
        {
            printf("%d found at %d index.\n", data, i);
            f = 1;
        }
    }

    if (!f)
    {
        printf("Sorry , You are wrong ");
    }
    return 0;
}
