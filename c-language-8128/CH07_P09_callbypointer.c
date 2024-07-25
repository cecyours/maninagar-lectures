#include<stdio.h>

void updateCoin(int *n)
{
    *n = *n + *n*2;
}

void main()
{
    int coin;

    printf("Enter the value : ");
    scanf("%d",&coin);

    updateCoin(&coin);

    printf("new updated coin : %d\n",coin);
}