#include <stdio.h>

float add(int a, int b);
float subtract(int a, int b);

float multiply(int a, int b);

float divide(int a, int b);

int main()
{
    int choice;
    float num1, num2, result;

    while (1)
    {
        printf("\n===== Calculator Menu =====\n");
        printf("1. Add\n");
        printf("2. Subtract\n");
        printf("3. Multiply\n");
        printf("4. Divide\n");
        printf("5. Exit\n");
        printf("Enter your choice (1-5): ");
        scanf("%d", &choice);

        if (choice == 5)
        {
            printf("Exiting calculator. Goodbye!\n");
            break;
        }

        // Input numbers
        printf("Enter two numbers: ");
        scanf("%f %f", &num1, &num2);

        switch (choice)
        {
        case 1:
            result = add(num1, num2);
            printf("------------\nResult: %.2f\n------------\n", result);
            break;
        case 2:
            result = subtract(num1, num2);
            printf("------------\nResult: %.2f\n------------\n", result);
            break;
        case 3:
            result = multiply(num1, num2);
            printf("------------\nResult: %.2f\n------------\n", result);
            break;
        case 4:
            if (num2 == 0)
                printf("Error: Cannot divide by zero.\n");
            else
            {
                result = divide(num1, num2);
                printf("------------\nResult: %.2f\n------------\n", result);
            }
            break;
        default:
            printf("Invalid choice! Please enter a valid option.\n");
        }
    }
    return 0;
}

float add(int a, int b)
{
    return a + b;
}

float subtract(int a, int b)
{
    return a - b;
}

float multiply(int a, int b)
{
    return a * b;
}

float divide(int a, int b)
{
    return a / b;
}
