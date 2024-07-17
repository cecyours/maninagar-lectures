#include <stdio.h>
void main()
{
    int a[100], i, n, data, f = 0;

    printf("Enter the size of element : ");
    scanf("%d", &n);

    printf("Enter the data:\n");

    for (i = 0; i < n; i++)
    {
        printf("Enter the element for %d index : ", i);
        scanf("%d", &a[i]);
    }

    printf("--------------\n");
    for (i = 0; i < n; i++)
    {
        printf("a[%d] = %d \n", i, a[i]);
    }
    printf("--------------\n");

    printf("Enter element to search : ");
    scanf("%d", &data);

    for (i = 0; i < n; i++)
    {
        if (data == a[i])
        {
            printf("element %d found at %d index.\n", a[i], i);
            f = 1;
        }
    }

    if (!f)
    {
        printf("element %d is not found at any index.\n", data);
    }
}