#include <stdio.h>

void main()
{
    int a, b, c, max;

    printf("Enter 3 numbers : ");
    scanf("%d,%d,%d", &a, &b, &c);
    // outer if-else statement
    if (a > b)
    {              // executes when a is greater than b.
        if (a > c) // inner if-else statement
        {
            max = a;
        }
        else
        {
            max = c;
        }
    }
    else
    {              // executes when b is greater than a.
        if (b > c) // inner if-else statement
        {
            max = b;
        }
        else
        {
            max = c;
        }
    }
    printf("Maximum is %d\n", max);

}
