
#include <stdio.h>
#include <stdlib.h>
void main()
{
    int *ptr, n, i;

    printf("Enter the size : ");
    scanf("%d", &n);

    printf("Enter %d elements : \n", n);

    ptr = calloc(n , sizeof(int));
    
    for (i = 0; i < n; i++)
    {
        printf("Enter data for %d : ", i);
        scanf("%d", (ptr + i));
    }

    printf("-------------\n");
    for (i = 0; i < n; i++)
    {
        printf("%d\n", *(ptr + i));
    }
}