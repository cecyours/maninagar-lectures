#include <stdio.h>
void main()
{
    int n, i, rem, rev = 0,sum=0;

    printf("enter the number : ");
    scanf("%d", &n);

    while (n > 0)
    {
        
        rem = n % 10;
        rev = rev * 10 + rem;
        if (rem%2==0)
        {
            sum +=rem;
        }
        
        n = n / 10;
    }
    printf("sum of even numbers : %d\n",sum);
    printf("reversed numbers : %d", rev);
}