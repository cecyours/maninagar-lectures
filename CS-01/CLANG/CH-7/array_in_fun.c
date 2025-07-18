#include <stdio.h>

int n, i; // global variables

int min(int arr[])
{
    int x = arr[0];
    for (i = 0; i < n; i++)
    {
        if (x > arr[i]) 
        {
            x = arr[i];
        }
    }
    return x; // minimum = x
}

int main()
{

    int data[100];
    int minimum;
    printf("Enter size of array : ");
    scanf("%d", &n);

    // for getting the data
    for (i = 0; i < n; i++)
    {
        printf(" enter data[ %d ] : ", i);
        scanf("%d", &data[i]);
    }

    minimum = min(data);

    printf("minimum is : %d\n", minimum);

    return 0;
}
