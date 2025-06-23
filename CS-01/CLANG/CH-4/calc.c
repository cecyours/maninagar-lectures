#include <stdio.h>
#include <conio.h>
int main()
{

    int a, b;
    char choice, ch;
    do
    {
        printf("Enter The value : ");
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
            break;
        }

        printf("do you want to repeat[y/n] : "); // asking user to execute again.
        scanf("%c", &choice);
    } while (choice == 'y' || choice == 'Y');
}
