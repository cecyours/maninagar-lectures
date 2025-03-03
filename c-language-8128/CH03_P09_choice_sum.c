#include <stdio.h>
void main()
{
    int a, coins=0;
    char choice;

    do
    {

        printf("Enter next number : ");
        scanf("%d", &a);

        coins += a;

        scanf("%c", &choice);

        printf("Do you want to continue [y/n]: ");
        scanf("%c", &choice);

    } while (choice == 'y' || choice == 'Y');

    printf("total coins : %d\n", coins);
}