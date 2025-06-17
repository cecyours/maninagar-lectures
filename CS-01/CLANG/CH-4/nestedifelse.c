#include <stdio.h>

int main()
{
    int a, b, c, max;
    printf("Enter Three Numbers :");
    scanf("%d , %d , %d ", &a, &b, &c);

    if (a > b)
    {
        if (a > c)
        {
            max = a;
        }
        else
        {
            max = c;
        }
    }
    else
    {
        if (b > c) // inner if-else statement
        {
            max = b;
        }
        else
        {
            max = c;
        }
    }

    printf("The Max Number is %d", max);
    return 0;
}
