#include <stdio.h>
int main()
{
    int arr[5] = {10, 20, 30, 40, 50};
    // int *p = arr; // pointer to first element

    for (int i = 0; i < 5; i++)
    {
        printf("Element %d: %d\n", i, arr[i]);
        // printf("Element %d: %d\n", i, *(p + i)); // access using pointer arithmetic

    }


    return 0;
}

