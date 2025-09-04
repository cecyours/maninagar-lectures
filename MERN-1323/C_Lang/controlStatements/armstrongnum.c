#include <stdio.h>
#include <math.h>

void main()
{
    int num, digits = 0, arm = 0;

    printf("Please enter a number: \n");
    scanf("%d", &num);

    int temp = num;

    while (temp > 0)
    {
        digits++;
        temp = temp / 10;
    }

    temp = num;

    while (temp > 0)
    {
        int rem = temp % 10;
        arm += pow(rem, digits);
        temp = temp / 10;
    }

    if(arm == num)
        printf("%d is an Armstrong number\n", num);
    else
        printf("%d is not an Armstrong number\n", num);
    
    
}