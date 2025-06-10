#include <stdio.h>

int main()
{

    int marks;

    printf("Enter the marks : ");
    scanf("%d", &marks);

    if (marks >= 33)
    {
        printf("Pass");
    }
    else
    {
        printf("Sorry ! Better Luck Next Time");
    }

    return 0;
}
