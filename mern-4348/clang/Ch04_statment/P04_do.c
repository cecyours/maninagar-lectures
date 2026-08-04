#include <stdio.h>

void main()
{
    int a, b;
    char ch, choice;
    do
    {
        printf("\n Enter the operator: ");
        scanf("%d%c%d", &a, &ch, &b);

        switch (ch)
        {
        case '+':
            printf("%d + %d = %d \n", a, b, a + b);
            break;
        case '-':
            printf("%d - %d = %d \n", a, b, a - b);
            break;
        case '*':
            printf("%d * %d = %d \n", a, b, a * b);
            break;
        case '/':
            printf("%d / %d = %d \n", a, b, a / b);
            break;
        case '%':
            printf("%d %% %d = %d \n", a, b, a % b);
            break;
        default:
            printf("invalid operator. %c\n", 1);
        }

        printf("Do you want to repeat[y/n]: ");
        scanf(" %c", &choice);

    } while (choice == 'y' || choice == 'Y');

    printf("Exit....");
}
