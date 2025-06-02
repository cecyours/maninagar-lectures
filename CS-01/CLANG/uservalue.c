#include <stdio.h>

// This program takes user input and displays it
int main() {

    int a;
    float b = 5.5;
    double c = 8.7987;

    printf("Enter one number (integer): ");
    scanf("%d", &a);

    printf("This is the user-written value of integer: %d\n", a);
    printf("Some preset values:\n");
    printf("Float value: %.2f\n", b);
    printf("Double value: %.4lf\n", c);

    return 0;
}
