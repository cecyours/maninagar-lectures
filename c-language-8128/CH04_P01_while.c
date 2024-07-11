#include <stdio.h>
void main()
{
    int sum = 0;
    int n, rem;

    printf("Enter the number : ");
    scanf("%d", &n);

    while (n > 0)
    {
        rem = n % 10;
        sum = sum + rem;
        n /= 10;
    }

    printf("the final sum : %d\n",sum);
}