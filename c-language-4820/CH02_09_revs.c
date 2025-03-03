#include <stdio.h>
int main()
{
    int n;
    int rem;
    int counter = 0;

    printf("Enter the value : ");
    scanf("%d", &n);

    while (n > 0)
    {
        counter++;
        rem = n % 10;
        if (counter % 2 != 0)
            printf("last digit (%d) : %d\n", counter, rem);
        n = n / 10;
    }

    /*
    138
     n(n/10)  | rem(n%10)
          ----|-----
           13 | 8
            1 | 3
            0 |  1

     */
    return 0;
}