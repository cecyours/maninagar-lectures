#include <stdio.h>

void main()
{
    int a, b, c;

    printf("Enter Three Numbers : \n");
    scanf("%d %d %d", &a, &b, &c);

    if(a > b)
    {
        if(a > c)
        {
            printf("The largest number is: %d\n", a);
        }
        else
        {
            printf("The largest number is: %d\n", c);
        }
    }
    else
    {
        if(b > c)
        {
            printf("The largest number is: %d\n", b);
        }
        else
        {
            printf("The largest number is: %d\n", c);
        }
    }
}