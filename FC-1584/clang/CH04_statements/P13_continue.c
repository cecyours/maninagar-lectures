#include <stdio.h>

void main()
{
    int i;
  
    for (i = 1; i <= 10; i++)
    {
        if (i == 6)
        {
            continue; // continue statement
        }
        printf("line %d.\n", i);
    }
    printf("\nHello World"); // rest statements
    
}