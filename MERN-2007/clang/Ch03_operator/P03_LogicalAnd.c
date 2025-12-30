#include <stdio.h>

void main()
{
    float marks;

    printf("Enter marks : ");
    scanf("%f", &marks);

    if (marks >= 33 && marks <= 100)
    {
        printf("Pass %c\n", 3);
    }
    else
    {
        printf("Better luck Next TIME !! %c\n", 2);
    }
   
}