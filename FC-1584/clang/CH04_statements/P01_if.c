#include <stdio.h>

void main()
{
    int num;

    printf("Enter the number : ");
    scanf("%d", &num);
    if (num > 100 || num < 0)
    {
        printf("You entered wrong number !!!\n");
        printf("\a");
    }
    printf("Number is : %d\n", num);
}