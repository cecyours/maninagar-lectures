#include<stdio.h>

int main()
{
    int a, b;

    printf("Enter Value of A: ");
    scanf("%d", &a);

    printf("Enter Value of B: ");
    scanf("%d", &b);

    if (a > 0 && b > 0)
    {
        /* code */
        printf("Both a and b are positive\n");
    }else
    {
        /* code */
        printf("At least one is non-positive\n");
    }
    
    
    
    return 0;
}

