#include <stdio.h>
#include <conio.h>

void main()
{
    int marks;

        printf("Please enter your marks : \n");
    scanf("%d", &marks);

    if(marks >= 33 && marks <= 100)
    {
        printf("You passed the exam !");
    }
    else
    {
        printf("Better luck next time!");
    }
}