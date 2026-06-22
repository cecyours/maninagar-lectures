#include <stdio.h>

void main()
{
    int num1, num2;
    char op, choice;
   

    do
    {
         printf("Please enter two numbers and operator: \n");
         scanf("%d %c %d", &num1, &op, &num2);
        switch (op)
        {
        case '+':
            /* code */
            printf("The sum is: %d\n", num1 + num2);
            break;
        case '-':
            /* code */
            printf("The difference is: %d\n", num1 - num2);
            break;
        case '*':
            /* code */
            printf("The product is: %d\n", num1 * num2);
            break;
        case '/':
            /* code */
            printf("The quotient is: %d\n", num1 / num2);
            break;
        default:
            printf("Invalid operator\n");
            break;
        }
        printf("Do you want to continue? (y/n): \n");
        scanf(" %c", &choice);
        
        
    } while (choice == 'y' || choice == 'Y');
    
}