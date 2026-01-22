#include <stdio.h>

int main() {
    int num;

    printf("Enter a number: ");
    scanf("%d", &num);

    switch(num % 2) {
        case 0:
            printf("Even number");
            break;
        case 1:
            printf("Odd number");
            break;
    }

    return 0;
}
