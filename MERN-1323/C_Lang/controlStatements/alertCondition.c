#include <stdio.h>

void main() {

    int num;
    printf("Please enter a number: ");
    scanf("%d", &num);

    if((num < 0) || (num > 100)) {
        printf("You entered an invalid number.\n");
        printf("\a");
    }
}