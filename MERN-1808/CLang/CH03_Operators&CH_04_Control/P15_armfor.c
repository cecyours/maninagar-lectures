#include <stdio.h>
#include <math.h>

int main() {
    int n;

    printf("Enter N: ");
    scanf("%d", &n);

    printf("Armstrong numbers between 1 and %d are:\n", n);

    // Loop 1 to N
    for(int num = 1; num <= n; num++) {

        int originalNum = num;
        int temp = num;
        int digits = 0;
        int sum = 0;

        // Count digits
        for(; temp != 0; temp /= 10) {
            digits++;
        }

        temp = num;

        // Armstrong calculation
        for(; temp != 0; temp /= 10) {
            int rem = temp % 10;
            sum += pow(rem, digits);
        }

        // Check Armstrong
        if(sum == originalNum) {
            printf("%d ", originalNum);
        }
    }

    return 0;
}