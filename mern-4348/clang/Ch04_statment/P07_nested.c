#include <stdio.h>

void main()
{

    int num, i, j;

    printf("Enter the number: ");
    scanf("%d", &num);

    for ( i = 0; i < num; i++)
    {
        for ( j = 0; j < num; j++)
        {
            printf(" * ");
        }
        printf("\n");
    }
    
}
