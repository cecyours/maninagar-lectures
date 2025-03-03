#include <stdio.h>
void main()
{
    int sum = 0;
    int n;

    do
    {
        printf("Enter the number : ");
        scanf("%d", &n);

        sum += n;

        printf("%2d => %2d \n",n,sum);
    } while (sum <= 100);

    printf("exit sum : %d\n",sum);
}