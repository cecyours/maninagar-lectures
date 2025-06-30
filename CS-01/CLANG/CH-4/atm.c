#include <stdio.h>

int main()
{

    int choice;
    float balance = 1000.0, amount;

    while (1)
    {
        printf("\n---- ATM Menu ----\n");
        printf("1. Check Balance\n2. Withdraw\n3. Deposit\n4. Exit\n");

        printf("Choose an Option : ");
        scanf("%d", &choice);

        switch (choice)
        {
        case 1:
            printf("Your balance is ₹%.2f\n", balance);
            break;

        case 2:
            printf("Enter amount to withdraw: ");
            scanf("%f", &amount);
            if (amount > balance)
                printf("Insufficient funds!\n");
            else
            {
                balance -= amount;
                printf("Withdrawn ₹%.2f. New balance: ₹%.2f\n", amount, balance);
            }
            break;

        case 3:
            printf("Enter amount to deposit: ");
            scanf("%f", &amount);
            balance += amount;
            printf("Deposited ₹ %.2f. New balance: ₹%.2f\n", amount, balance);
            break;

        case 4:
            printf("Exiting... Thank you!\n");
            return 0;

        default:
            printf("Invalid option. Try again.\n");
        }
    }

    return 0;
}
