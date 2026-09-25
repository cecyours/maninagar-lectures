#include<stdio.h>

int main()
{
    int a, b;

    printf("Enter Value of A: ");
    scanf("%d", &a);

    printf("Enter Value of B: ");
    scanf("%d", &b);

    if(a > b) {
        printf("A is Greather than b");
    }else {
        printf("B is Greater than A");
    }

    return 0;
}

