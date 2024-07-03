#include <stdio.h>
#include <stdlib.h>
void main()
{
    int *ptr;
    int n, i, extra_blocks;
    char choice = 'N';

    printf("Enter the number of Elements ");
    scanf("%d", &n);

    ptr = (int *)calloc(n, sizeof(int));

    if (ptr == NULL)
    {
        printf("memory 404");
    }

    printf("Enter the data : \n");

    for (i = 0; i < n; i++)
    {
        printf("Enter record : ");
        scanf("%d", &ptr[i]);
    }

    printf("\n----------\n");

    for (i = 0; i < n; i++)
    {
        printf("%d => %d\n", i, ptr[i]);
    }
    scanf("%c", &choice);

    printf("do u want extra blocks[Y/N] ? : ");
    scanf("%c", &choice);

    if (choice != 'Y' && choice != 'y')
    {
        printf("exited...");
        exit(0);
    }

    printf("Enter number of extra blocks : ");
    scanf("%d", &extra_blocks);

    printf("\n Enter those data :\n");

    ptr = realloc(ptr, sizeof(int) * (extra_blocks + n));

    for (; i < n + extra_blocks; i++)
    {
        printf("Enter record : ");
        scanf("%d", &ptr[i]);
    }

    printf("\n----------\n");

    for (i = 0; i < n + extra_blocks; i++)
    {
        printf("%d => %d\n", i, ptr[i]);
    }
    free(ptr);

    printf("\n---- after ------\n");

    for (i = 0; i < n + extra_blocks; i++)
    {
        printf("%d => %d\n", i, ptr[i]);
    }
}