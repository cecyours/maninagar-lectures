#include <stdio.h>

int main()
{

    // int arr[3] = {10, 20, 30};
    // int *p = arr;

    // printf("%d\n", p++);

    // printf("%d\n", *p);
    // p++;

    // printf("%d\n", *p);

    // printf("%d\n", p++);

    // pointes and array

    int arr[5] = {1, 2, 3, 4, 5};


    int *ptr = arr;

    
    for (int i = 0; i < 5; i++)
    {
        printf("%d ", *(ptr + i));
    }

    return 0;
}
