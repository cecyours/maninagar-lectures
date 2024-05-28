
#include <stdio.h>
void main()
{
    int numbers[100], n, i, search_number, f = 0;

    printf("Enter the size : ");
    scanf("%d", &n);

    printf("enter the data : \n");

    for (i = 0; i < n; i++)
    {
        printf("enter data for numbers[%d] = ", i);
        scanf("%d", &numbers[i]);
    }
    printf("\n----------------\n");
    printf("Enter a number to search_number : ");
    scanf("%d", &search_number);

    for (i = 0; i < n; i++)
    {
        if (search_number == numbers[i])
        {
            f = 1;
            printf("the number is  found. %d at %d index.\n", search_number, i);
        }
    }

    if (f == 0)
    {
        printf("%d is not found in given array.", search_number);
    }

    printf("\n----------------\n");
    for (i = 0; i < n; i++)
    {
        printf("numbers[%d] = %d\n", i, numbers[i]);
    }
}