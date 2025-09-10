#include <stdio.h>
#include <stdlib.h>
int main()
{

    int n = 5;

    int *ptr;

    ptr = (int *)malloc(n * sizeof(int));

    printf("Enter input values: \n");
    for (int i = 0; i < n; ++i)
    {
        scanf("%d", ptr + i);
    }
    printf("lnput Values: Nn");
    for (int i = 0; i < n; ++i)
    {
        printf("%d\n");
    }
    return 0;
}
