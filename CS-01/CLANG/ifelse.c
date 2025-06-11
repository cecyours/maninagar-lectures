#include <stdio.h>

int main()
{

    int marks;

    printf("Enter the marks : ");
    scanf("%d", &marks);

    // Logica AND
    // if (marks >= 33 && marks <= 100)

    // logical OR
    // if (marks >= 33 || marks <= 100)
 
    if (marks >= 33 || marks <= 100)
    {
        printf("Pass");
    }
    else
    {
        printf("Sorry ! Better Luck Next Time");
    }

    return 0;
}
