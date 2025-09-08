#include <stdio.h>

void main()
{
    int arr[100], size;

    printf("Enter the size of the array :");
    scanf("%d", &size);

    printf("Enter the data:");
    for(int index = 0; index < size; index++)
    {
        printf("Enter arr[%d] :", index);
        scanf("%d", &arr[index]);
    }

    for(int index = 0; index < size; index++)
    {
        printf("The data at arr[%d] is : %d\n", index, arr[index]);
    }
}