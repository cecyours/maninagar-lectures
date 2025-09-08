#include <stdio.h>

void main()
{
    int size;

    printf("Enter size of the array : \n");
    scanf("%d", &size);

    int arr[size], sum = 0, avg;

    for(int index = 0; index < size; index++)
    {
        printf("Element at index arr[%d] : ", index);
        scanf("%d", &arr[index]);
    }

    for(int index = 0; index < size; index++)
    {
        sum += arr[index];
    }

    avg = sum / size;

    printf("The sum is : %d and the average is : %d", sum, avg);
}