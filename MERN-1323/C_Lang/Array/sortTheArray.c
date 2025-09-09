#include <stdio.h>
void main()
{
    int size;

    printf("Enter the size of the array:\n");
    scanf("%d", &size);

    int arr[size];

    for(int index = 0; index < size; index++)
    {
        printf("Enter the number at position a[%d]", index);
        scanf("%d", &arr[index]);
    }

    for(int index = 0; index < size - 1; index++)
    {
        for(int index2 = index + 1; index2 < size; index2++)
        {
            if(arr[index] > arr[index2])
            {
                int temp = arr[index];
                arr[index] = arr[index2];
                arr[index2] = temp;
            }
        }
    }

    for(int index = 0; index < size; index++)
    {
        printf("Element at Position a[%d] = %d\n", index, arr[index]);
    }
}