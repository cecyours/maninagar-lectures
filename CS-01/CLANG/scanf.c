#include <stdio.h>

// This is a simple Hello World program
int main()
{
    int age;
    float height;
    char initial;

    printf("Enter your age: ");
    scanf("%d", &age);

    printf("Enter Your height : ");
    scanf("%f", &height);

    printf("Enter Your initial character of name : ");
    scanf(" %c", &initial);

    printf("\nAge: %d\n", age);
    printf("Height: %.2f\n", height);
    printf("Initial: %c\n", initial);

    return 0;
}
