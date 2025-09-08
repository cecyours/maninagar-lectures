#include <stdio.h>

void main()
{
    int size;

    printf("Enter size of the array : \n");
    scanf("%d", &size);

    int arr[size];

    for(int index = 0; index < size; index++)
    {
        printf("Element at index arr[%d] : ", index);
        scanf("%d", &arr[index]);
    }

    int min = arr[0], max = arr[0];

    for(int index = 0; index < size; index++)
    {
        if(arr[index] < min)
        {
            min = arr[index];
        }
        if(arr[index] > max)
        {
            max = arr[index];
        }
    }

    printf("Minimum value is %d\n Maximum value is %d", min, max);
}