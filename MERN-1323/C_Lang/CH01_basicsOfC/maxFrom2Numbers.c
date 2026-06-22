#include <stdio.h>

void main()
{
    int a, b;

    printf("Please enter two numbers : \n");
    scanf("%d %d", &a, &b);

    if(a > b)
    {
        printf("%d is higher than %d", a, b);
    }
    else{
        printf("%d is higher than %d", b, a);
    }
}