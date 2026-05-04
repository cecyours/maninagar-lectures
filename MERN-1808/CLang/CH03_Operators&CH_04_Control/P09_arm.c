#include<stdio.h>

int main() {

    int num, temp, digits = 0, rem, arm = 0;

    printf("Enter the number: ");
    scanf("%d", &num);

    temp = num;

    do {
        digits++;
        temp /= 10;
    } while (temp != 0);

    temp = num;

    do {
        rem = num % 10;

        int power = 1;
        for(int i = 0; i < digits; i++) {
            power *= rem;
        }

        arm += power;
        num /= 10;

    } while (num != 0);

    if (temp == arm) {
        printf("%d is an Armstrong number\n", temp);
    } else {
        printf("%d is not an Armstrong number\n", temp);
    }

    return 0;
}