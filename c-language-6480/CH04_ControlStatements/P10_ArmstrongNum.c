#include <stdio.h>
#include <math.h>

void main() {
    int num, rem, arm = 0, temp, digits = 0;

    printf("Enter a number: ");
    scanf("%d", &num);

    temp = num;

    // Count digits
    while (temp > 0) {
        digits++;
        temp /= 10;
    }

    temp = num;
    while (temp > 0) {
        rem = temp % 10;
        arm = arm + pow(rem, digits);
        temp = temp / 10;
    }

    if (num == arm)
        printf("%d is an Armstrong Number\n", num);
    else
        printf("%d is not an Armstrong Number\n", num);
}
