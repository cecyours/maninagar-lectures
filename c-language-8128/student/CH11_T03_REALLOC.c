#include <stdio.h>
#include <stdlib.h>
void main()
{
    int *ptr, a, i, n;
    char ch;

    printf("Enter the size : ");
    scanf("%d", &a);

    ptr = calloc(a, sizeof(int));

    for (i = 0; i < a; i++)
    {
        /* code */
        printf("Enter data of number %d : ", i + 1);
        scanf("%d", (ptr + i));
    }

    printf("-----------------------\n");

    for (i = 0; i < a; i++)
    {
        /* code */
        printf("%d\n", *(ptr + i));
    }

    printf("Do your want to continue{y/n} : ");
    scanf("%c", &ch);
    scanf("%c", &ch);

    if (ch != 'Y' && ch != 'y')
    {
        /* code */
        printf("Exiting...");
        exit(0);
    }
    
    printf("Enter the size : ");
    scanf("%d", &n);

    for (i = a; i < a + n; i++)
    {
        /* code */
        printf("Enter the data for %d number : ", i+1 );
        scanf("%d", (ptr + i));
    }

    printf("-----------------------\n");

    for (i = 0; i < a + n; i++)
    {
        /* code */
        printf("%d\n", *(ptr + i));
    }
}