#include <stdio.h>

int main()
{

    // (condition) ? expression1 : expression2 ;

    int a;

    printf("Enter The Number :");
    scanf("%d", &a);

    (a % 2 == 0) ? printf("Even") : printf("Odd");

    return 0;
}
