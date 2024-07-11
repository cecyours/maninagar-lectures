#include <stdio.h>
void main()
{
    int start, end, n, i, rem, rev = 0;

    printf("Enter the numbers : ");
    scanf("%d,%d", &start, &end);

    for (i = start; i <= end; i++)
    {
        n = i;
        rev = 0;
        while (n > 0)
        {
            rem = n % 10;
            rev = rev * 10 + rem;
            n = n / 10;
        }

        if (i == rev)
            {
                printf("%3d => %3d\n", i, rev);
            }
    }
}