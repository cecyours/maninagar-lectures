#include <stdio.h>

void main()
{
    int n;
    
    printf("Enter the number for the pattern: \n");
    scanf("%d", &n);

    for(int row = 0; row < n; row++)
    {
        for(int col = 0; col < n; col++)
        {
            printf("* ");
        }
        printf("\n");
    }
}