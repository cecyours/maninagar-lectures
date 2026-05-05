#include <stdio.h>
int main()
{
    int arr[5] = {12, 45, 7, 30, 25};
    int *p = arr;
    int max = *p;
    for (int i = 1; i < 5; i++)
    {
        if (*(p + i) > max)
            max = *(p + i);
    }
    printf("Maximum element: %d\n", max);
    return 0;
}