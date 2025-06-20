#include <stdio.h>
#include <conio.h>
#include <math.h>

int main()
{

    int num, rem, temp, arm = 0, digits = 0;
    printf("Enter The value : ");
    scanf("%d", &num);

    temp = num;

    while (temp > 0)
    {
        digits++;
        temp /= 10;
    }

    temp = num;

    while (num > 0)
    {
        rem = num % 10; // to get last digit
        printf("Rem is %d\n", rem);
        arm = arm + pow(rem, digits); // adding remdigits to arm
        printf("arm is %d\n", arm);

        num = num / 10; // to erase the last digit / decrement
        printf("num is %d\n", num);
    }

    if (temp == arm)
    {
        printf("%d is an Armstrong number.\n", temp);
    }
    else
    {
        printf("%d is not an Armstrong number.\n", temp);
    }

    return 0;
}
