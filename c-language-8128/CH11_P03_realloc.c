
#include <stdio.h>
#include <stdlib.h>
void main()
{
    int *ptr, n, i, new_size;
    char choice;

    printf("Enter the size : ");
    scanf("%d", &n);

    printf("Enter %d elements : \n", n);

    ptr = calloc(n, sizeof(int));

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

    printf("do you want to add new elements[y/n] : ");
    scanf("%c", &choice);
    scanf("%c", &choice);

    if (choice != 'Y' && choice != 'y')
    {
        printf("extiing...");
        exit(0);
    }

    printf("Enter the size of new elements : ");
    scanf("%d", &new_size);

    // ptr = realloc(n + new_size, sizeof(int));
    ptr  = realloc(ptr,(n+new_size)*sizeof(int));
    printf("Enter elements : \n");
    for (i = n; i < n + new_size; i++)
    {
        printf("Enter data for %d : ", i);
        scanf("%d", (ptr + i));
    }


     printf("-------------\n");
    for (i = 0; i < n+new_size; i++)
    {
        printf("%d\n", *(ptr + i));
    }
}