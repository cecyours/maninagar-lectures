#include <stdio.h>
#include <stdbool.h>

void main()
{
    int size, num;
    bool found = false;

    printf("Enter size of the array : \n");
    scanf("%d", &size);

    int arr[size];

    for(int index = 0; index < size; index++)
    {
        printf("Element at index arr[%d] : ", index);
        scanf("%d", &arr[index]);
    }

    printf("Please enter the element, which need to be searched\n");
    scanf("%d", &num);

    for(int index = 0; index < size; index++)
    {
        if(arr[index] == num)
        {
            printf("Element present at index %d", index);
            found = true;
            break;
        }
    }

    if(!found)
    {
        printf("Element not found in the given array!");
    }
}