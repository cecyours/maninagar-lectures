#include <stdio.h>

void main()
{
    int num, ans = 0;

    printf("Enter a number : \n");
    scanf("%d", &num);

    while (num > 0)
    {
        int rem = num % 10;
        ans = ans * 10 + rem;
        num = num / 10;
    }
    printf("The reversed number is: %d\n", ans);
}