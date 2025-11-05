#include<stdio.h>

void main() {
    int a, b;
    char ch, choice;

    do {
        printf("\nEnter your operation (Example: 5 + 3): ");
        scanf("%d %c %d", &a, &ch, &b);

        switch(ch) {
            case '+':
                printf("%d + %d = %d\n", a, b, a + b);
                break;
            case '-':
                printf("%d - %d = %d\n", a, b, a - b);
                break;
            case '*':
                printf("%d * %d = %d\n", a, b, a * b);
                break;
            case '/':
                if(b != 0)
                    printf("%d / %d = %d\n", a, b, a / b);
                else
                    printf("Division by zero not allowed!\n");
                break;
            case '%':
                printf("%d %% %d = %d\n", a, b, a % b);
                break;
            default:
                printf("Invalid operator!\n");
        }

        printf("Do you want to continue? [y/n]: ");
        scanf(" %c", &choice);  

    } while (choice == 'y' || choice == 'Y');

    printf("\nExit.\n");
}
