#include <stdio.h>
void main()
{
    int a;

    printf("enter the number : ");
    scanf("%d", &a);

    if (a > 0)
    {
        while (a > 0)
        {
            printf("%d\n", a);
            a--;
        }
    }
    else
    {
        while (a < 0)
        {
            printf("%d\n", a);
            a++;
        }
    }
}